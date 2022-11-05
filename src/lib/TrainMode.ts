import { BasicCar } from "./BasicCar";
import type { GameWorld } from "./GameWorld";
import type { Mode } from "./Mode";
import * as tf from "@tensorflow/tfjs";
import * as THREE from "three";

interface PopulationElement {
    car: BasicCar;
    model: tf.Sequential;
    fitness: number;
}

const carBodyMaterial = new THREE.MeshNormalMaterial();
const carWheelMaterial = new THREE.MeshPhongMaterial({
    color: 0x222222,
});

const CarType = BasicCar;
const outputSize = 5; // The number of outputs the network

export class TrainMode implements Mode {
    gameWorld: GameWorld;
    inputSize: number;
    isTraining: boolean = false;
    populationSize: number = 50;
    maxRunTime: number = 20; // The maximum time a generation can run for in seconds.
    population: PopulationElement[] = [];
    hiddenLayerSize: number = 10;
    timeLeft: number = 0;

    constructor(gameWorld) {
        this.gameWorld = gameWorld;

        this.inputSize = CarType.sensorNumber + 1;
    }

    generatePopulation() {
        this.population = [];
        for (let i = 0; i < this.populationSize; i++) {
            this.population.push(this.generateAgent());
        }
    }

    startTraining() {
        this.isTraining = true;
        if (this.population.length === 0) this.generatePopulation();
        this.timeLeft = this.maxRunTime;
    }

    stopTraining() {
        this.isTraining = false;
    }

    update(delta: number) {
        if (this.isTraining) {
            this.timeLeft -= delta;
            if (this.timeLeft <= 0) {
                this.doRankingAndCrossover();
                this.timeLeft = this.maxRunTime;
                this.resetCars();
            }
        }

        this.population.forEach((element) => {
            const sens = element.car.getSensorData(this.gameWorld);
            const vel = element.car.getForwardVelocity();
            const input = tf.tensor([[...sens.map(s => s.distance), vel]]);
            const result = element.model.predict(input) as tf.Tensor;
            const WASDSPACE = result.arraySync()[0].map(d => d >= 0.5);
            element.car.applyInput(...WASDSPACE);
            input.dispose();
            result.dispose();

            // const carPos = element.car.getPosition();
            // element.fitness = this.gameWorld.raceTrack.amountCompleted(carPos.x, carPos.z);
        });
    }

    doRankingAndCrossover() {
        this.population.forEach((element) => {
            const carPos = element.car.getPosition();
            element.fitness = this.gameWorld.raceTrack.amountCompleted(carPos.x, carPos.z);
        });
        this.population.sort((a, b) => b.fitness - a.fitness);

        tf.tidy(() => {
            const crossoverRate = 0.25;
            for (let i = Math.round(this.population.length / 2); i < this.population.length; i++) {
                if (Math.random() >= crossoverRate) continue;
                const parent1 = this.population[Math.floor(Math.random() * this.population.length / 2)];
                const parent2 = this.population[Math.floor(Math.random() * this.population.length / 2)];
                const child = this.population[i];
                for (let wIdx = 0; wIdx < child.model.weights.length; wIdx++) {
                    const w = child.model.weights[wIdx];
                    const w1 = parent1.model.weights[wIdx];
                    const w2 = parent2.model.weights[wIdx];
                    const r = Math.random();
                    w.val.assign(w1.val.mul(r).add(w2.val.mul(1 - r)));
                }
            }

            const mutationRate = 0.05;
            for (let i = 0; i < this.population.length; i++) {
                if (Math.random() >= mutationRate) continue;
                this.population[i].model.weights.forEach(w => {
                    const diff = tf.randomNormal(w.shape, 0, 0.01);
                    w.val.assign(w.val.add(diff));
                });
            }
        });
    }

    activate() {
        this.gameWorld.controls.reset();
    }

    deactivate() {
        // TODO
    }

    resetCars() {
        this.population.forEach((element) => {
            this.gameWorld.removeGameObject(element.car);
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
                tf.layers.dense({ inputShape: [this.inputSize], units: this.hiddenLayerSize, activation: 'tanh' }),
                tf.layers.dense({ units: outputSize, activation: 'softmax' }),
            ]
        });
        model.compile({
            optimizer: 'adam', // or 'sgd'
            loss: 'binaryCrossentropy', // because we can have multiple outputs 1
            // metrics: ['accuracy'],
        });
        model.weights.forEach(w => {
            // if (!w.name.includes("bias")) return;
            const newVals = tf.randomNormal(w.shape);
            // w.val is an instance of tf.Variable
            w.val.assign(newVals);
        });
        return { car, model, fitness: 0 };
    }
}
