import * as THREE from "three";
import { GameWorld } from "./GameWorld";
import { Mode } from "./Mode";
import { BasicCar } from "./BasicCar";

const carBodyMaterial = new THREE.MeshNormalMaterial();
const carWheelMaterial = new THREE.MeshPhongMaterial({
    color: 0x222222,
});

export class PlayMode implements Mode {
    gameWorld: GameWorld;
    car: BasicCar;
    keyupHandler: (e: any) => void;
    keydownHandler: (e: any) => void;

    constructor(gameWorld) {
        this.gameWorld = gameWorld;
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
            this.car.applyInput(W, A, S, D, SPACE);
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
            this.car.applyInput(W, A, S, D, SPACE);
        };
    }

    activate() {
        this.car = new BasicCar(
            -0.2,
            0.4,
            -0.2,
            carBodyMaterial,
            carWheelMaterial,
            5,
            0.25,
            0.1
        );
        this.gameWorld.addGameObject(this.car);

        document.addEventListener("keydown", this.keydownHandler);
        document.addEventListener("keyup", this.keyupHandler);
    }

    deactivate() {
        this.gameWorld.removeGameObject(this.car);

        document.removeEventListener("keydown", this.keydownHandler);
        document.removeEventListener("keyup", this.keyupHandler);
    }
}
