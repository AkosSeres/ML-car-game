import * as THREE from "three";
import type { GameWorld } from "./GameWorld";
import type { Mode } from "./Mode";
import { BasicCar } from "./BasicCar";

const carBodyMaterial = new THREE.MeshNormalMaterial();
const carWheelMaterial = new THREE.MeshPhongMaterial({
    color: 0x222222,
});

export class PlayMode implements Mode {
    gameWorld: GameWorld;
    car?: BasicCar;
    keyupHandler: (e: any) => void;
    keydownHandler: (e: any) => void;
    arrowHelpers: THREE.ArrowHelper[] = [];
    sensorData: { distance: number; origin: THREE.Vector3; direction: THREE.Vector3; }[] = [];
    chaseMode: boolean = true;
    W: boolean = false;
    A: boolean = false;
    S: boolean = false;
    D: boolean = false;
    SPACE: boolean = false;
    private _showSensors: boolean = false;
    completion: number = 0;

    constructor(gameWorld: GameWorld) {
        this.gameWorld = gameWorld;
        this.keydownHandler = (e) => {
            switch (e.key) {
                case "w":
                    this.W = true;
                    e.preventDefault();
                    break;
                case "a":
                    this.A = true;
                    e.preventDefault();
                    break;
                case "s":
                    this.S = true;
                    e.preventDefault();
                    break;
                case "d":
                    this.D = true;
                    e.preventDefault();
                    break;
                case " ":
                    this.SPACE = true;
                    e.preventDefault();
                    break;
            }
        };
        this.keyupHandler = (e) => {
            switch (e.key) {
                case "w":
                    this.W = false;
                    e.preventDefault();
                    break;
                case "a":
                    this.A = false;
                    e.preventDefault();
                    break;
                case "s":
                    this.S = false;
                    e.preventDefault();
                    break;
                case "d":
                    this.D = false;
                    e.preventDefault();
                    break;
                case " ":
                    this.SPACE = false;
                    e.preventDefault();
                    break;
            }
        };
    }

    update(_: number) {
        this.car?.applyInput(this.W, this.A, this.S, this.D, this.SPACE);

        if (this.car) {
            const networkInput = this.car.getNetworkInput(this.gameWorld);
            this.sensorData = networkInput.sensorData;
            this.sensorData.forEach((sensorData, idx) => {
                const arrowHelper = this.arrowHelpers[idx];
                arrowHelper.setLength(sensorData.distance, 0.05, 0.03);
                arrowHelper.setDirection(sensorData.direction);
                arrowHelper.position.copy(sensorData.origin);
                arrowHelper.updateMatrix();

                const domElement = document.getElementById("arrow-length-indicator-" + idx)
                if (domElement) {
                    domElement.style.width = (sensorData.distance * 100) + "%";
                    domElement.innerText = sensorData.distance.toFixed(2);
                }
            });

            const carRotationCompassElement = document.getElementById("car-rotation-compass");
            if (carRotationCompassElement) carRotationCompassElement.style.transform = `rotate(${Math.atan2(
                networkInput.sideAmount,
                networkInput.forwardAmount
            )}rad)`;

            this.completion = networkInput.completed;
            const completionTextElement = document.getElementById("completion-text");
            if (completionTextElement) completionTextElement.innerText = (this.completion * 100).toFixed(1) + "%";
            const completionBar = document.getElementById("completion-bar")
            if (completionBar) {
                completionBar.style.width = (this.completion * 100) + "%";
                completionBar.style.backgroundColor = PlayMode.getCompletionBarColor(this.completion);
            }
            const velocityElement = document.getElementById("velocity-element");
            if (velocityElement) velocityElement.innerText = this.car.getForwardVelocity().toFixed(2);
        }


        if (this.chaseMode && this.car) {
            this.gameWorld.controls.target = this.car.getPosition();
            this.gameWorld.controls.target.y += 0.2;
            let fwd = this.car.getForwardDir();
            fwd.y = 0;
            fwd.normalize();
            fwd.multiplyScalar(-0.5);
            fwd.y = 0.2;
            this.gameWorld.camera.position.copy(this.car.getPosition());
            this.gameWorld.camera.position.add(fwd);
        }
    }

    get showSensors() {
        return this._showSensors;
    }

    set showSensors(show: boolean) {
        this._showSensors = show;
        this.arrowHelpers.forEach((arrowHelper) => {
            arrowHelper.visible = show;
        });
    }

    /**
     * Removes the car from the scene if it exists.
     */
    removeCar() {
        if (this.car) {
            this.gameWorld.removeGameObject(this.car);
            this.car.dispose();
        }
        delete this.car;

        this.arrowHelpers.forEach((arrowHelper) => {
            this.gameWorld.scene.remove(arrowHelper);
            // @ts-ignore
            arrowHelper.dispose();
        });
        this.arrowHelpers = [];
        this.sensorData = [];
        this.completion = 0;
    }

    /**
     * Creates a new car and adds it to the scene. It it is already present, it is removed first.
     */
    respawnCar() {
        this.removeCar();

        this.car = new BasicCar(
            this.gameWorld.raceTrack.startX,
            0.4,
            this.gameWorld.raceTrack.startZ,
            carBodyMaterial,
            carWheelMaterial,
            5,
            0.25,
            0.1
        );
        this.car.rotateY(this.gameWorld.raceTrack.startRotation);
        this.gameWorld.addGameObject(this.car);

        this.arrowHelpers = this.car.getSensorRays().map((ray) => {
            const dir = ray.ray.direction;
            dir.normalize();
            const origin = ray.ray.origin;
            const length = dir.length();
            const hex = 0xffff00;
            const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
            arrowHelper.visible = this.showSensors;
            this.gameWorld.scene.add(arrowHelper);
            return arrowHelper;
        });
        this.sensorData = this.car.getSensorData(this.gameWorld);
    }

    activate() {
        this.W = this.A = this.S = this.D = this.SPACE = false;
        this.respawnCar();

        document.addEventListener("keydown", this.keydownHandler);
        document.addEventListener("keyup", this.keyupHandler);
    }

    deactivate() {
        this.removeCar();

        document.removeEventListener("keydown", this.keydownHandler);
        document.removeEventListener("keyup", this.keyupHandler);
    }

    static getCompletionBarColor(completion: number) {
        if (completion > 0.5) {
            return `rgb(${Math.floor((1 - completion) * 510)}, 255, 0)`;
        } else {
            return `rgb(255, ${Math.floor(completion * 510)}, 0)`;
        }
    }
}
