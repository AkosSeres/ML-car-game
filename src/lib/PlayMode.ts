import * as THREE from "three";
import type { GameWorld } from "./GameWorld";
import type { Mode } from "./Mode";
import { BasicCar } from "./BasicCar";
import { BARRIER_RAYCAST_LAYER } from "./RaceTrack";

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
    arrowLengths: number[] = [];
    chaseMode: boolean;
    private _showSensors: boolean = false;

    constructor(gameWorld) {
        this.gameWorld = gameWorld;
        this.chaseMode = false;
        let W = false,
            A = false,
            S = false,
            D = false,
            SPACE = false;
        this.keydownHandler = (e) => {
            switch (e.key) {
                case "w":
                    W = true;
                    e.preventDefault();
                    break;
                case "a":
                    A = true;
                    e.preventDefault();
                    break;
                case "s":
                    S = true;
                    e.preventDefault();
                    break;
                case "d":
                    D = true;
                    e.preventDefault();
                    break;
                case " ":
                    SPACE = true;
                    e.preventDefault();
                    break;
            }
            this.car?.applyInput(W, A, S, D, SPACE);
        };
        this.keyupHandler = (e) => {
            switch (e.key) {
                case "w":
                    W = false;
                    e.preventDefault();
                    break;
                case "a":
                    A = false;
                    e.preventDefault();
                    break;
                case "s":
                    S = false;
                    e.preventDefault();
                    break;
                case "d":
                    D = false;
                    e.preventDefault();
                    break;
                case " ":
                    SPACE = false;
                    e.preventDefault();
                    break;
            }
            this.car?.applyInput(W, A, S, D, SPACE);
        };
    }

    update(delta: number) {
        this.car?.getRays().forEach((ray, idx) => {
            ray.layers.set(BARRIER_RAYCAST_LAYER);
            const intersects = ray.intersectObjects(
                this.gameWorld.scene.children
            );
            let distance = 1.0;
            intersects.forEach((sect) => {
                if (sect.distance < distance) distance = sect.distance;
            });
            const arrowHelper = this.arrowHelpers[idx];
            arrowHelper.setLength(distance, 0.05, 0.03);
            this.arrowLengths[idx] = distance;
            arrowHelper.setDirection(ray.ray.direction);
            arrowHelper.position.x = ray.ray.origin.x;
            arrowHelper.position.y = ray.ray.origin.y;
            arrowHelper.position.z = ray.ray.origin.z;
            arrowHelper.updateMatrix();

            const domElement = document.getElementById("arrow-length-indicator-" + idx);
            domElement.style.width = (distance * 100) + "%";
            domElement.innerText = distance.toFixed(2);
        });

        if (this.car) {
            let forwardDir = this.car.getForwardDir();
            forwardDir.y = 0;
            forwardDir.normalize();
            let carVel = this.car.bodies[0].velocity;
            document.getElementById("velocity-element").innerText = forwardDir.dot(new THREE.Vector3(carVel.x, carVel.y, carVel.z)).toFixed(2);
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
        if (this.car) this.gameWorld.removeGameObject(this.car);
        delete this.car;

        this.arrowHelpers.forEach((arrowHelper) => {
            this.gameWorld.scene.remove(arrowHelper);
            arrowHelper.dispose();
        });
        this.arrowHelpers = [];
        this.arrowLengths = [];
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

        this.arrowHelpers = this.car.getRays().map((ray) => {
            const dir = ray.ray.direction;
            dir.normalize();
            const origin = ray.ray.origin;
            const length = dir.length();
            const hex = 0xffff00;
            const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
            arrowHelper.visible = this.showSensors;
            this.gameWorld.scene.add(arrowHelper);
            this.arrowLengths.push(length);
            return arrowHelper;
        });
    }

    activate() {
        this.respawnCar();

        document.addEventListener("keydown", this.keydownHandler);
        document.addEventListener("keyup", this.keyupHandler);
    }

    deactivate() {
        this.removeCar();

        document.removeEventListener("keydown", this.keydownHandler);
        document.removeEventListener("keyup", this.keyupHandler);
    }
}
