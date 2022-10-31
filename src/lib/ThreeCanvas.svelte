<script>
    import * as THREE from "three";
    import * as CANNON from "cannon-es";
    import { onMount } from "svelte";
    import { BoxObject, SphereObject } from "./GameObject";
    import { GameWorld } from "./GameWorld";
    import { BasicCar, CAR_COLLISION_FILTER_GROUP } from "./BasicCar";
    import { RaceTrack } from "./RaceTrack";
    import { gameWorldStore } from "./stores";

    let canvas;
    /** @type {GameWorld} */
    let gameWorld;

    onMount(() => {
        gameWorld = new GameWorld(canvas);
        gameWorldStore.set(gameWorld);

        // Define the curve
        let roadPoints = [
            new THREE.Vector3(4.0, 0.0, 4.0),
            new THREE.Vector3(-4.0, 0.0, 4.0),
            new THREE.Vector3(-4.0, 0.0, 0.0),
            new THREE.Vector3(4.0, 0.0, 0.0),
            new THREE.Vector3(4.0, 0.0, -4.0),
            new THREE.Vector3(-4.0, 0.0, -4.0),
        ];
        let road = new RaceTrack(roadPoints, 1.0);
        gameWorld.addGameObject(road);
    });
</script>

<canvas bind:this={canvas} />

<style>
    canvas {
        width: 100%;
        height: 100vh;
    }
</style>
