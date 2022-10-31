<script>
    import * as THREE from "three";
    import * as CANNON from "cannon-es";
    import { onMount } from "svelte";
    import { BoxObject, SphereObject } from "./GameObject";
    import { GameWorld } from "./GameWorld";
    import { BasicCar, CAR_COLLISION_FILTER_GROUP } from "./BasicCar";
    import { RaceTrack } from "./RaceTrack";
    import { gameWorldStore } from "./stores";

    const BARRIER_RAYCAST_LAYER = 4;
    const BARRIER_COLLISION_FILTER_GROUP = 16;

    let canvas;
    /** @type {GameWorld} */
    let gameWorld;

    onMount(() => {
        gameWorld = new GameWorld(canvas);
        gameWorldStore.set(gameWorld);
        const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const box = new BoxObject(
            0,
            0,
            0,
            10,
            0.2,
            10,
            phongMaterial,
            0,
            0.05,
            0.05
        );
        gameWorld.addGameObject(box);

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

        const arrowHelpers = car.getRays().map((ray) => {
            const dir = ray.ray.direction;
            dir.normalize();
            const origin = ray.ray.origin;
            const length = dir.length();
            const hex = 0xffff00;
            const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
            gameWorld.scene.add(arrowHelper);
            return arrowHelper;
        });

        const applyInput = () => {
            car.getRays().forEach((ray, idx) => {
                ray.layers.set(BARRIER_RAYCAST_LAYER);
                const intersects = ray.intersectObjects(
                    gameWorld.scene.children
                );
                let distance = 1.0;
                intersects.forEach((sect) => {
                    if (sect.distance < distance) distance = sect.distance;
                });
                const arrowHelper = arrowHelpers[idx];
                arrowHelper.setLength(distance, 0.05, 0.03);
                arrowHelper.setDirection(ray.ray.direction);
                arrowHelper.position.x = ray.ray.origin.x;
                arrowHelper.position.y = ray.ray.origin.y;
                arrowHelper.position.z = ray.ray.origin.z;
            });

            window.requestAnimationFrame(applyInput);
        };
        window.requestAnimationFrame(applyInput);
    });
</script>

<canvas bind:this={canvas} />

<style>
    canvas {
        width: 100%;
        height: 100vh;
    }
</style>
