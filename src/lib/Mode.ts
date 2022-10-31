import { GameWorld } from "./GameWorld";

export interface Mode {
    gameWorld: GameWorld;
    activate(): void;
    deactivate(): void;
}
