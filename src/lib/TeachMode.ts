import { BasicCar } from "./BasicCar";
import { PlayMode } from "./PlayMode";
import * as tf from "@tensorflow/tfjs";
import type { GameWorld } from "./GameWorld";
tf.setBackend("cpu"); // can be "cpu" or "webgl" or "wasm"

export enum TeachModeState {
    Teach,
    Demonstrate,
    None,
}

interface Record { sensorData: any[], forwardVelocity: number, action: number[], networkInput: number[] };

const CarType = BasicCar;
const outputSize = 5; // The number of outputs the network

export class TeachMode extends PlayMode {
    inputSize: number;
    model: tf.Sequential = tf.sequential();
    _state: TeachModeState = TeachModeState.None;
    previousState: TeachModeState = TeachModeState.None;
    recording: Record[] = [];
    storedRecording: Record[] = [];
    isCurrentlyFitting: boolean = false;
    currentLoss: number = 0;
    epochsDone: number = 0;
    _numberOfEpochs: number = 40;
    _batchSize: number = 32;
    _hiddenLayerSize: number = 16;

    constructor(gameWorld: GameWorld) {
        super(gameWorld);

        this.inputSize = CarType.networkInputSize;
        this.generateNetwork();
    }

    generateNetwork() {
        if (this.model) this.model.dispose();
        this.model = tf.sequential({
            layers: [
                tf.layers.dense({ inputShape: [this.inputSize], units: this.hiddenLayerSize, activation: 'relu' }),
                tf.layers.dense({ units: outputSize, activation: 'sigmoid' }),
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
        this.removeCar();
        this.gameWorld.resetCamera();
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
        this.gameWorld.resetCamera();
        this.rerenderTeachPanel();
    }

    storeRecording() {
        this.storedRecording.push(...this.recording);
        this.recording = [];
        this.rerenderTeachPanel();
    }

    async trainFromStored() {
        const xArray = this.storedRecording.map(record => record.networkInput);
        const yArray = this.storedRecording.map(record => record.action);
        const xDataset = tf.tensor(xArray);
        const yDataset = tf.tensor(yArray);
        this.isCurrentlyFitting = true;
        await this.model.fit(xDataset, yDataset, {
            epochs: this.numberOfEpochs,
            callbacks: {
                onEpochEnd: (epoch, logs) => {
                    if (logs) this.currentLoss = logs.loss;
                    this.epochsDone = epoch + 1;
                    this.rerenderTeachPanel();
                }, onTrainEnd: () => {
                    this.isCurrentlyFitting = false;
                    this.rerenderTeachPanel();
                }
            }
        });
        xDataset.dispose();
        yDataset.dispose();
    }

    update(delta: number) {
        super.update(delta);

        if (this.state === TeachModeState.Teach && this.car) {
            const carPos = this.car.getPosition();
            if (this.gameWorld.raceTrack.isFinished(carPos.x, carPos.z)) {
                this.state = TeachModeState.None;
                this.removeCar();
                this.rerenderTeachPanel();
                this.gameWorld.resetCamera();
            } else {
                this.recording.push({
                    ...this.car.getNetworkInput(this.gameWorld),
                    action: [+this.W, +this.A, +this.S, +this.D, +this.SPACE],
                });
                document.getElementById("recorded-count-span").innerText = this.recording.length.toString();
            }
        }

        if (this.state === TeachModeState.Demonstrate && this.car) {
            const input = tf.tensor([this.car.getNetworkInput(this.gameWorld).networkInput]);
            const result = this.model.predict(input) as tf.Tensor;
            const WASDSPACE = (result.arraySync() as number[][])[0].map(d => d >= 0.5);
            // @ts-ignore
            this.car.applyInput(...WASDSPACE);
            input.dispose();
            result.dispose();
            if (this.W || this.A || this.S || this.D || this.SPACE) {
                this.car.applyInput(this.W, this.A, this.S, this.D, this.SPACE);
                this.recording.push({
                    ...this.car.getNetworkInput(this.gameWorld),
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
     * Empties the store where the recorded data is stored.
     */
    emptyStoredRecording() {
        this.storedRecording = [];
        this.rerenderTeachPanel();
    }

    /**
     * Indicates for the UI to rererender.
     */
    rerenderTeachPanel() {
        // @ts-ignore
        window.rerenderTeachPanel();
    }
}