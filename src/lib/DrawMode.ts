import { GameWorld } from "./GameWorld";
import { Mode } from "./Mode";

export class DrawMode implements Mode {
    gameWorld: GameWorld;

    constructor(gameWorld) {
        this.gameWorld = gameWorld;
    }

    activate() {
        // TODO
    }

    deactivate() {
        // TODO
    }
}
