import { BasicCar } from "./BasicCar";
import { PlayMode } from "./PlayMode";
import * as tf from "@tensorflow/tfjs";
tf.setBackend("cpu"); // can be "cpu" or "webgl" or "wasm"

const CarType = BasicCar;
const outputSize = 5; // The number of outputs the network

export class TeachMode extends PlayMode {
    hiddenLayerSize: number = 10;
    inputSize: number;
    model: tf.Sequential;

    constructor(gameWorld) {
        super(gameWorld);

        this.inputSize = CarType.sensorNumber + 1;
        this.generateNetwork();
    }

    generateNetwork() {
        this.model = tf.sequential({
            layers: [
                tf.layers.dense({ inputShape: [this.inputSize], units: this.hiddenLayerSize, activation: 'relu' }),
                tf.layers.dense({ units: outputSize, activation: 'softmax' }),
            ]
        });
    }

    update(delta: number) {
        super.update(delta);
    }

    removeCar() {
        super.removeCar();
        delete this.inputSize;
    }

    respawnCar() {
        super.respawnCar();
    }
}