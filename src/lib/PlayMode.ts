import * as THREE from "three";
import { GameWorld } from "./GameWorld";
import { Mode } from "./Mode";
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
    arrowHelpers: THREE.Mesh[] = [];
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
                    break;
                case "a":
                    A = true;
                    break;
                case "s":
                    S = true;
                    break;
                case "d":
                    D = true;
                    break;
                case " ":
                    SPACE = true;
                    break;
            }
            this.car?.applyInput(W, A, S, D, SPACE);
        };
        this.keyupHandler = (e) => {
            switch (e.key) {
                case "w":
                    W = false;
                    break;
                case "a":
                    A = false;
                    break;
                case "s":
                    S = false;
                    break;
                case "d":
                    D = false;
                    break;
                case " ":
                    SPACE = false;
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
            arrowHelper.setDirection(ray.ray.direction);
            arrowHelper.position.x = ray.ray.origin.x;
            arrowHelper.position.y = ray.ray.origin.y;
            arrowHelper.position.z = ray.ray.origin.z;
            arrowHelper.updateMatrix();
        });

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
        });
        this.arrowHelpers = [];
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
