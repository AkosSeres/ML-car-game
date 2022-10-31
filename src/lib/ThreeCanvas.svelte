<script>
    import * as THREE from "three";
    import * as CANNON from "cannon-es";
    import { onMount } from "svelte";
    import { BoxObject, SphereObject } from "./GameObject";
    import { GameWorld } from "./GameWorld";
    import { BasicCar, CAR_COLLISION_FILTER_GROUP } from "./BasicCar";
    import { gameWorldStore } from "./stores";

    let canvas;
    /** @type {GameWorld} */
    let gameWorld;

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
