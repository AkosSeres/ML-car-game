<script>
    import * as THREE from "three";
    import * as CANNON from "cannon-es";
    import { onMount } from "svelte";
    import { BoxObject, SphereObject } from "./GameObject";
    import { GameWorld } from "./GameWorld";
    import { BasicCar, CAR_COLLISION_FILTER_GROUP } from "./BasicCar";

    const BARRIER_RAYCAST_LAYER = 8;

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
            5,
            0.25,
            0.1
        );
        gameWorld.addGameObject(car);

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

        // Define the curve
        let roadSpline = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-3.0, 0.0, 1.0),
            new THREE.Vector3(-3.0, 0.0, 4.0),
            new THREE.Vector3(-3.0, 0.0, 3.0),
            new THREE.Vector3(3.0, 0.0, -2.0),
            new THREE.Vector3(1.0, 0.0, -3.0),
        ]);
        roadSpline.type = "catmullrom";
        roadSpline.closed = false;

        // Add road lines
        let roadLineLen = 0.19;
        let arcLen = roadSpline.getLength();
        let roadLineNum = Math.floor(arcLen / roadLineLen / 2);
        let lineGeomerty = new THREE.BoxGeometry(0.04, 0.1, roadLineLen);
        let lineMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        for (let i = 1; i < roadLineNum; i += 2) {
            let u = i / roadLineNum;
            let p = roadSpline.getPointAt(u);
            let t = roadSpline.getTangentAt(u);
            let lineMesh = new THREE.Mesh(lineGeomerty, lineMaterial);
            lineMesh.position.x = p.x;
            lineMesh.position.y = p.y + 0.065;
            lineMesh.position.z = p.z;
            lineMesh.rotateY(Math.atan2(t.x, t.z));
            gameWorld.scene.add(lineMesh);
        }

        // Set up settings for later extrusion
        let extrudeSettings = {
            steps: Math.floor(roadSpline.getLength() / 0.05),
            bevelEnabled: false,
            extrudePath: roadSpline,
        };

        // Define a triangle
        let pts = [new THREE.Vector2(0, -0.5), new THREE.Vector2(0, 0.5)];
        let shape = new THREE.Shape(pts);

        // Extrude the triangle along the CatmullRom curve
        let geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        let material = new THREE.MeshLambertMaterial({
            color: 0x515151,
            wireframe: false,
        });

        {
            let barrierSize = 0.45;
            let barrierMaterial = new THREE.MeshLambertMaterial({
                color: 0xbb0000,
                wireframe: false,
            });

            const leftPoints = [];
            for (
                let i = 6;
                i < geometry.attributes.position.array.length / 2;
                i += 9
            ) {
                leftPoints.push(
                    new THREE.Vector3(
                        geometry.attributes.position.array[i],
                        geometry.attributes.position.array[i + 1] + 0.12,
                        geometry.attributes.position.array[i + 2]
                    )
                );
            }
            let leftKerbSpline = new THREE.CatmullRomCurve3(leftPoints);
            leftKerbSpline.type = "catmullrom";
            leftKerbSpline.closed = false;
            let leftKerbLength = leftKerbSpline.getLength();
            let leftBarrierNum = Math.floor(leftKerbLength / barrierSize);
            for (let i = 0; i < leftBarrierNum; i++) {
                let u = i / leftBarrierNum;
                let t = leftKerbSpline.getTangentAt(u);
                let p = leftKerbSpline.getPointAt(u);
                let barrier = new BoxObject(
                    p.x,
                    p.y + 0.1,
                    p.z,
                    barrierSize + 0.2,
                    0.5,
                    0.1,
                    barrierMaterial,
                    0
                );
                barrier.rotateY(Math.atan2(-t.z, t.x));
                barrier.meshes[0].layers.enable(BARRIER_RAYCAST_LAYER);
                gameWorld.addGameObject(barrier);
            }

            const rightPoints = [];
            for (
                let i = 3;
                i < geometry.attributes.position.array.length / 2;
                i += 9
            ) {
                rightPoints.push(
                    new THREE.Vector3(
                        geometry.attributes.position.array[i],
                        geometry.attributes.position.array[i + 1] + 0.12,
                        geometry.attributes.position.array[i + 2]
                    )
                );
            }
            let rightKerbSpline = new THREE.CatmullRomCurve3(rightPoints);
            rightKerbSpline.type = "centripetal";
            rightKerbSpline.closed = false;
        }

        // Create mesh with the resulting geometry
        let mesh = new THREE.Mesh(geometry, material);
        mesh.translateY(0.11);
        gameWorld.scene.add(mesh);

        const applyInput = () => {
            car.applyInput(W, A, S, D, SPACE);

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
