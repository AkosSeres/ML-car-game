import { GameWorld } from "./GameWorld";

export interface Mode {
    gameWorld: GameWorld;
    update(delta: number): void;
    activate(): void;
    deactivate(): void;
}
