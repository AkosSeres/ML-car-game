import { GameWorld } from "./GameWorld";
import { Mode } from "./Mode";
import * as THREE from "three";

export class DrawMode implements Mode {
    gameWorld: GameWorld;

    constructor(gameWorld) {
        this.gameWorld = gameWorld;
    }

    activate() {
        this.gameWorld.controls.maxPolarAngle = 0;
        this.gameWorld.controls.minAzimuthAngle = 0;
        this.gameWorld.controls.maxAzimuthAngle = 0;
        this.gameWorld.controls.minDistance = 8;
        this.gameWorld.controls.maxDistance = 8;
        this.gameWorld.controls.target = new THREE.Vector3(0, 0, 0);
    }

    deactivate() {
        this.gameWorld.controls.maxPolarAngle = Math.PI;
        this.gameWorld.controls.minAzimuthAngle = Infinity;
        this.gameWorld.controls.maxAzimuthAngle = Infinity;
        this.gameWorld.controls.minDistance = 0;
        this.gameWorld.controls.maxDistance = 50;
        this.gameWorld.controls.reset();
    }
}
