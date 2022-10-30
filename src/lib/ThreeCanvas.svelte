<script>
    import * as THREE from "three";
    import { onMount } from "svelte";
    import { BoxObject, SphereObject } from "./GameObject";
    import { GameWorld } from "./GameWorld";
    import { BasicCar, CAR_COLLISION_FILTER_GROUP } from "./BasicCar";

    let canvas;
    /** @type {GameWorld} */
    let gameWorld;

    onMount(() => {
        gameWorld = new GameWorld(canvas);
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

        const sphere = new SphereObject(0.3, 0.3, 0.3, 0.1, phongMaterial, 0.2);
        gameWorld.addGameObject(sphere);

        const carBodyMaterial = new THREE.MeshNormalMaterial();
        const carWheelMaterial = new THREE.MeshPhongMaterial({
            color: 0x222222,
        });

        const car2 = new BasicCar(
            0.5,
            0.4,
            -0.5,
            carBodyMaterial,
            carWheelMaterial,
            1,
            0.25,
            0.1
        );
        gameWorld.addGameObject(car2);

        const car = new BasicCar(
            -0.5,
            0.4,
            -0.5,
            carBodyMaterial,
            carWheelMaterial,
            1,
            0.25,
            0.1
        );
        gameWorld.addGameObject(car);

        const arrowHelpers = car.getRays().map((ray) => {
            const dir = ray.direction;
            dir.normalize();
            const origin = ray.from;
            const length = ray.to.vsub(ray.from).length();
            const hex = 0xffff00;
            const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
            gameWorld.scene.add(arrowHelper);
            return arrowHelper;
        });

        let W = false,
            A = false,
            S = false,
            D = false,
            SPACE = false;
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "w":
                    W = true;
                    break;
                case "a":
                    A = true;
                    break;
                case "s":
                    S = true;
                    break;
                case "d":
                    D = true;
                    break;
                case " ":
                    SPACE = true;
                    break;
            }
        });
        document.addEventListener("keyup", (e) => {
            switch (e.key) {
                case "w":
                    W = false;
                    break;
                case "a":
                    A = false;
                    break;
                case "s":
                    S = false;
                    break;
                case "d":
                    D = false;
                    break;
                case " ":
                    SPACE = false;
                    break;
            }
        });

        const applyInput = () => {
            car.applyInput(W, A, S, D, SPACE);

            car.getRays().forEach((ray, idx) => {
                ray.intersectWorld(gameWorld.world, {
                    checkCollisionResponse: false,
                    skipBackfaces: true,
                    collisionFilterMask: ~CAR_COLLISION_FILTER_GROUP,
                });
                const result = ray.result;
                const arrowHelper = arrowHelpers[idx];
                arrowHelper.setDirection(ray.direction);
                if (result.distance === -1) arrowHelper.setLength(1);
                else arrowHelper.setLength(result.distance);
                arrowHelper.position.x = ray.from.x;
                arrowHelper.position.y = ray.from.y;
                arrowHelper.position.z = ray.from.z;
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
