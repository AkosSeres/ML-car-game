import { BasicCar } from "./BasicCar";
import type { GameWorld } from "./GameWorld";
import type { Mode } from "./Mode";
import * as tf from "@tensorflow/tfjs";
import * as THREE from "three";
import type { TeachMode } from "./TeachMode";

interface PopulationElement {
    car: BasicCar;
    model: tf.LayersModel;
    fitness: number;
    finished: boolean;
}

const carBodyMaterial = new THREE.MeshNormalMaterial();
const carWheelMaterial = new THREE.MeshPhongMaterial({
    color: 0x222222,
});

const CarType = BasicCar;
const outputSize = 5; // The number of outputs the network

export class TrainMode implements Mode {
    gameWorld: GameWorld;
    teachModeReference?: TeachMode;
    inputSize: number;
    isTraining: boolean = false;
    populationSize: number = 50;
    maxRunTime: number = 20; // The maximum time a generation can run for in seconds.
    lastMaxRunTime: number = 20;
    population: PopulationElement[] = [];
    hiddenLayerSize: number = 16;
    timeLeft: number = 0;
    topRatio: number = 0.5;
    crossoverRate: number = 0.25;
    mutationRate: number = 0.05;
    mutationStrength: number = 0.02;
    generationCount: number = 1;
    chaseFirstCar: boolean = false;

    constructor(gameWorld: GameWorld) {
        this.gameWorld = gameWorld;

        this.inputSize = CarType.networkInputSize;
    }

    generatePopulation() {
        this.population = [];
        for (let i = 0; i < this.populationSize; i++) {
            this.population.push(this.generateAgent());
        }
    }

    loadTeachedModelToPopulation() {
        if (!this.teachModeReference) return;
        if (this.population.length === 0) this.generatePopulation();
        this.stopTraining();
        this.generationCount = 1;
        this.population.forEach(e => {
            e.model.dispose();
            this.teachModeReference?.model.save(tf.io.withSaveHandler(async artifacts => {
                e.model = await tf.loadLayersModel(tf.io.fromMemory(artifacts));
                return {
                    modelArtifactsInfo: {
                        dateSaved: new Date(),
                        modelTopologyType: "JSON",
                    }
                };
            }));
        });
        this.rerenderTrainPanel();
    }

    startTraining() {
        this.isTraining = true;
        if (this.population.length === 0) this.generatePopulation();
        else this.resetCars();
        this.timeLeft = this.maxRunTime;
        this.lastMaxRunTime = this.timeLeft;
    }

    stopTraining() {
        this.isTraining = false;
        this.timeLeft = this.maxRunTime;
        this.lastMaxRunTime = this.timeLeft;
        this.resetCars();
    }

    resetPopulation() {
        this.stopTraining();
        this.removeCars();
        this.population.forEach((element) => {
            element.car.dispose();
            element.model.dispose();
        });
        this.population = [];
        this.generationCount = 1;
        this.generatePopulation();
        this.rerenderTrainPanel();
    }

    update(delta: number) {
        if (this.isTraining) {
            this.timeLeft -= delta;
            if (this.timeLeft <= 0) {
                this.doRankingAndCrossover();
                this.timeLeft = this.maxRunTime;
                this.lastMaxRunTime = this.timeLeft;
                this.resetCars();
                this.generationCount++;
                this.rerenderTrainPanel();
            }

            let bestCar: BasicCar | undefined = undefined
            let bestCompleted = 0;

            this.population.forEach((element) => {
                if (element.finished) return;
                const netInput = element.car.getNetworkInput(this.gameWorld);
                if (netInput.completed > bestCompleted) {
                    bestCar = element.car;
                    bestCompleted = netInput.completed;
                }
                const input = tf.tensor([netInput.networkInput]);
                const result = element.model.predict(input) as tf.Tensor;
                const WASDSPACE = (result.arraySync() as number[][])[0].map((d: number) => d >= 0.5);
                element.car.applyInput(WASDSPACE[0], WASDSPACE[1], WASDSPACE[2], WASDSPACE[3], WASDSPACE[4]);
                input.dispose();
                result.dispose();

                const carPos = element.car.getPosition();
                element.fitness = this.gameWorld.raceTrack.amountCompleted(carPos.x, carPos.z);
                if (this.gameWorld.raceTrack.isFinished(carPos.x, carPos.z)) {
                    element.finished = true;
                    element.fitness = 1.0 + this.timeLeft;
                }
            });

            if (this.chaseFirstCar && bestCar) {
                this.gameWorld.controls.target = bestCar.getPosition();
                this.gameWorld.controls.target.y += 0.2;
                let fwd = bestCar.getForwardDir();
                fwd.y = 0;
                fwd.normalize();
                fwd.multiplyScalar(-0.5);
                fwd.y = 0.2;
                this.gameWorld.camera.position.copy(bestCar.getPosition());
                this.gameWorld.camera.position.add(fwd);
            }

            const progressBar = document.getElementById("generation-progress-bar");
            if (progressBar) progressBar.style.width = `${(this.timeLeft / this.lastMaxRunTime) * 100}%`;
        }
    }

    doRankingAndCrossover() {
        this.population.forEach((element) => {
            const carPos = element.car.getPosition();
            element.fitness = this.gameWorld.raceTrack.amountCompleted(carPos.x, carPos.z);
        });
        this.population.sort((a, b) => b.fitness - a.fitness);

        tf.tidy(() => {
            // Perform crossover
            for (let i = Math.round(this.population.length * this.topRatio); i < this.population.length; i++) {
                if (Math.random() >= this.crossoverRate) continue;
                const parent1 = this.population[Math.floor(Math.random() * this.population.length * this.topRatio)];
                const parent2 = this.population[Math.floor(Math.random() * this.population.length * this.topRatio)];
                const child = this.population[i];
                const r = Math.random();
                for (let wIdx = 0; wIdx < child.model.weights.length; wIdx++) {
                    const w = child.model.weights[wIdx];
                    const w1 = parent1.model.weights[wIdx];
                    const w2 = parent2.model.weights[wIdx];
                    // @ts-ignore
                    w.val.assign(w1.val.mul(r).add(w2.val.mul(1 - r)));
                }
            }
            // Perform mutations
            for (let i = 0; i < this.population.length; i++) {
                if (Math.random() >= this.mutationRate) continue;
                this.population[i].model.weights.forEach(w => {
                    const diff = tf.randomNormal(w.shape as number[], 0, this.mutationStrength);
                    // @ts-ignore
                    w.val.assign(w.val.add(diff));
                });
            }
        });
    }

    activate() {
        this.gameWorld.controls.reset();
    }

    deactivate() {
        this.stopTraining();
        this.removeCars();
    }

    removeCars() {
        this.population.forEach((element) => {
            this.gameWorld.removeGameObject(element.car);
        });
    }

    resetCars() {
        this.population.forEach((element) => {
            this.gameWorld.removeGameObject(element.car);
            element.car.dispose();
            const car = new BasicCar(
                this.gameWorld.raceTrack.startX,
                0.4,
                this.gameWorld.raceTrack.startZ,
                carBodyMaterial,
                carWheelMaterial,
                5,
                0.25,
                0.1
            );
            car.rotateY(this.gameWorld.raceTrack.startRotation);
            this.gameWorld.addGameObject(car);
            element.car = car;
            element.fitness = 0;
            element.finished = false;
        });
    }

    generateAgent() {
        const car = new BasicCar(
            this.gameWorld.raceTrack.startX,
            0.4,
            this.gameWorld.raceTrack.startZ,
            carBodyMaterial,
            carWheelMaterial,
            5,
            0.25,
            0.1
        );
        car.rotateY(this.gameWorld.raceTrack.startRotation);
        this.gameWorld.addGameObject(car);
        const model = tf.sequential({
            layers: [
                tf.layers.dense({ inputShape: [this.inputSize], units: this.hiddenLayerSize, activation: 'relu' }),
                tf.layers.dense({ units: outputSize, activation: 'sigmoid' }),
            ]
        });
        model.compile({
            optimizer: 'adam', // or 'sgd'
            loss: 'binaryCrossentropy', // because we can have multiple outputs 1
            // metrics: ['accuracy'],
        });
        model.weights.forEach(w => {
            const newVals = tf.randomNormal(w.shape as number[]);
            // @ts-ignore
            w.val.assign(newVals);
            newVals.dispose();
        });
        return { car, model, fitness: 0, finished: false };
    }

    /**
     * Indicates for the UI to rererender.
     */
    rerenderTrainPanel() {
        // @ts-ignore
        window.rerenderTrainPanel();
    }
}
