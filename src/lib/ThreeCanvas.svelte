<script lang="ts">
    import { onMount } from "svelte";
    import { GameWorld } from "./GameWorld";
    import { gameWorldStore } from "./stores";

    let canvas: HTMLCanvasElement;
    let gameWorld: GameWorld;

    onMount(() => {
        gameWorld = new GameWorld(canvas);
        gameWorldStore.set(gameWorld);
    });
</script>

<canvas bind:this={canvas} />

<style>
    canvas {
        width: 100%;
        height: 100vh;
    }
</style>
