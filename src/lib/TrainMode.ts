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
                const newVals = tf.randomNormal(w.shape);
                // w.val is an instance of tf.Variable
                w.val.assign(newVals);
            });
            this.population.push({ car, model, fitness: 0 });
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
                this.stopTraining();
            }
        }

        this.population.forEach((element) => {
            const sens = element.car.getSensorData(this.gameWorld);
            const vel = element.car.getForwardVelocity();
            const input = [[...sens.map(s => s.distance), vel]];
            const result = element.model.predict(tf.tensor(input)) as tf.Tensor;
            const WASDSPACE = result.arraySync()[0].map(d => d >= 0.5);
            element.car.applyInput(...WASDSPACE);
        });
    }

    activate() {
        this.gameWorld.controls.reset();
    }

    deactivate() {
        // TODO
    }
}
