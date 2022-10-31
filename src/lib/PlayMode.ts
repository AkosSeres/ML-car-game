import { GameWorld } from "./GameWorld";
import { Mode } from "./Mode";

export class PlayMode implements Mode {
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
