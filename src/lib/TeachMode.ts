import { BasicCar } from "./BasicCar";
import { PlayMode } from "./PlayMode";
import * as tf from "@tensorflow/tfjs";
import { convertTypeAcquisitionFromJson } from "typescript";
tf.setBackend("cpu"); // can be "cpu" or "webgl" or "wasm"

export enum TeachModeState {
    Teach,
    Demonstrate,
    None,
}

interface Record { sensordDistances: number[], forwardVelocity: number, action: number[] };

const CarType = BasicCar;
const outputSize = 5; // The number of outputs the network

export class TeachMode extends PlayMode {
    inputSize: number;
    model: tf.Sequential;
    _state: TeachModeState = TeachModeState.None;
    previousState: TeachModeState = TeachModeState.None;
    recording: Record[] = [];
    storedRecording: Record[] = [];
    isCurrentlyFitting: boolean = false;
    currentLoss: number = 0;
    epochsDone: number = 0;
    _numberOfEpochs: number = 40;
    _batchSize: number = 32;
    _hiddenLayerSize: number = 10;

    constructor(gameWorld) {
        super(gameWorld);

        this.inputSize = CarType.sensorNumber + 1;
        this.generateNetwork();
    }

    generateNetwork() {
        this.model = tf.sequential({
            layers: [
                tf.layers.dense({ inputShape: [this.inputSize], units: this.hiddenLayerSize, activation: 'tanh' }),
                tf.layers.dense({ units: outputSize, activation: 'softmax' }),
            ]
        });
        this.model.compile({
            optimizer: 'adam', // or 'sgd'
            loss: 'binaryCrossentropy', // because we can have multiple outputs 1
            // metrics: ['accuracy'],
        });
    }

    recordButtonPressed() {
        this.respawnCar();
        this.state = TeachModeState.Teach;
        this.recording = [];
        this.rerenderTeachPanel();
    }

    discardButtonPressed() {
        this.state = TeachModeState.None;
        this.recording = [];
        this.removeCar();
        this.gameWorld.controls.reset();
        this.rerenderTeachPanel();
    }

    startAIDemonstration() {
        this.state = TeachModeState.Demonstrate;
        this.recording = [];
        this.respawnCar();
        this.rerenderTeachPanel();
    }

    stopAIDemonstration() {
        this.state = TeachModeState.None;
        this.removeCar();
        this.gameWorld.controls.reset();
        this.rerenderTeachPanel();
    }

    storeRecording() {
        this.storedRecording.push(...this.recording);
        this.recording = [];
        this.rerenderTeachPanel();
    }

    async trainFromStored() {
        const xArray = this.storedRecording.map(record => [...record.sensordDistances, record.forwardVelocity]);
        const yArray = this.storedRecording.map(record => record.action);
        const xDataset = tf.data.array(xArray);
        const yDataset = tf.data.array(yArray);
        const xyDataset = tf.data.zip({ xs: xDataset, ys: yDataset }).batch(this.batchSize).shuffle(this.batchSize);
        this.isCurrentlyFitting = true;
        await this.model.fitDataset(xyDataset, {
            epochs: this.numberOfEpochs,
            callbacks: {
                onEpochEnd: (epoch, logs) => {
                    this.currentLoss = logs.loss;
                    this.epochsDone = epoch + 1;
                    this.rerenderTeachPanel();
                }, onTrainEnd: () => {
                    this.isCurrentlyFitting = false;
                    this.rerenderTeachPanel();
                }
            }
        });
    }

    update(delta: number) {
        super.update(delta);

        if (this.state === TeachModeState.Teach && this.car) {
            const carPos = this.car.getPosition();
            if (this.gameWorld.raceTrack.isFinished(carPos.x, carPos.z)) {
                this.state = TeachModeState.None;
                this.removeCar();
                this.rerenderTeachPanel();
                this.gameWorld.controls.reset();
            } else {
                this.recording.push({
                    sensordDistances: this.sensorData.map(s => s.distance),
                    forwardVelocity: this.car.getForwardVelocity(),
                    action: [+this.W, +this.A, +this.S, +this.D, +this.SPACE],
                });
                document.getElementById("recorded-count-span").innerText = this.recording.length.toString();
            }
        }

        if (this.state === TeachModeState.Demonstrate && this.car) {
            const input = [[...this.sensorData.map(datum => datum.distance), this.car.getForwardVelocity()]];
            const result = this.model.predict(tf.tensor(input)) as tf.Tensor;
            const WASDSPACE = result.arraySync()[0].map(d => d >= 0.5);
            console.log(WASDSPACE);
            this.car.applyInput(...WASDSPACE);
            if (this.W || this.A || this.S || this.D || this.SPACE) {
                this.car.applyInput(this.W, this.A, this.S, this.D, this.SPACE);
                this.recording.push({
                    sensordDistances: this.sensorData.map(s => s.distance),
                    forwardVelocity: this.car.getForwardVelocity(),
                    action: [+this.W, +this.A, +this.S, +this.D, +this.SPACE],
                });
                document.getElementById("recorded-count-span").innerText = this.recording.length.toString();
            }
        }
    }

    removeCar() {
        super.removeCar();
    }

    respawnCar() {
        super.respawnCar();
    }

    activate() {
        super.activate();
        this.removeCar();
    }

    deactivate() {
        super.deactivate();
        this.removeCar();
        this.state = TeachModeState.None;
        this.recording = [];
    }

    get numberOfEpochs() {
        return this._numberOfEpochs;
    }

    set numberOfEpochs(value: number) {
        if (value === null || value === undefined || value < 1) return;
        this._numberOfEpochs = Math.floor(value);
    }

    get batchSize() {
        return this._batchSize;
    }

    set batchSize(value: number) {
        if (value === null || value === undefined || value < 1) return;
        this._batchSize = Math.floor(value);
    }

    get hiddenLayerSize() {
        return this._hiddenLayerSize;
    }

    set hiddenLayerSize(value: number) {
        if (value === null || value === undefined || value < 1) return;
        this._hiddenLayerSize = Math.floor(value);
        this.generateNetwork();
    }

    get state() {
        return this._state;
    }

    set state(newState: TeachModeState) {
        if (newState !== this._state) {
            this.previousState = this._state;
            this._state = newState;
        }
    }

    /**
     * Indicates for the UI to rererender.
     */
    rerenderTeachPanel() {
        // @ts-ignore
        window.rerenderTeachPanel();
    }
}