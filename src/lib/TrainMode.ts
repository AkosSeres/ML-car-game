import type { GameWorld } from "./GameWorld";
import type { Mode } from "./Mode";

export class TrainMode implements Mode {
    gameWorld: GameWorld;

    constructor(gameWorld) {
        this.gameWorld = gameWorld;
    }

    update(delta: number) {
        // TODO
    }

    activate() {
        this.gameWorld.controls.reset();
    }

    deactivate() {
        // TODO
    }
}
