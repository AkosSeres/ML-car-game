<script>
    import * as THREE from "three";
    import * as CANNON from "cannon-es";
    import { OrbitControls } from "three/addons/controls/OrbitControls.js";
    import { onMount } from "svelte";

    let canvas;

    onMount(() => {
        const camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.01,
            10
        );
        camera.position.z = 0.5;
        camera.position.y = 0.5;
        camera.position.x = 0.5;

        const scene = new THREE.Scene();

        const phongMaterial = new THREE.MeshPhongMaterial();

        const world = new CANNON.World();
        world.gravity.set(0, -9.82, 0);

        const groundMaterial = new CANNON.Material("groundMaterial");
        groundMaterial.friction = 0.05;
        groundMaterial.restitution = 0.05;

        const wheelMaterial = new CANNON.Material("wheelMaterial");
        wheelMaterial.friction = 0.25;
        wheelMaterial.restitution = 0.25;

        const geometry = new THREE.BoxGeometry(2, 0.2, 2);
        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        const cubeShape = new CANNON.Box(new CANNON.Vec3(1, 0.1, 1));
        const cubeBody = new CANNON.Body({ mass: 0, material: groundMaterial });
        cubeBody.addShape(cubeShape);
        cubeBody.position.x = mesh.position.x;
        cubeBody.position.y = mesh.position.y;
        cubeBody.position.z = mesh.position.z;
        world.addBody(cubeBody);

        const boxGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xaa11aa });
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        box.translateY(0.4);
        box.translateX(0.5);
        box.castShadow = true;
        box.receiveShadow = true;
        scene.add(box);
        const boxShape = new CANNON.Box(new CANNON.Vec3(0.1, 0.1, 0.1));
        const boxBody = new CANNON.Body({ mass: 0.1 });
        boxBody.addShape(boxShape);
        boxBody.position.x = box.position.x;
        boxBody.position.y = box.position.y;
        boxBody.position.z = box.position.z;
        world.addBody(boxBody);

        const carBodyGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.2);
        const carBodyMesh = new THREE.Mesh(carBodyGeometry, phongMaterial);
        carBodyMesh.position.y = 1;
        carBodyMesh.castShadow = true;
        scene.add(carBodyMesh);
        const carBodyShape = new CANNON.Box(new CANNON.Vec3(0.05, 0.05, 0.1));
        const carBody = new CANNON.Body({ mass: 1 });
        carBody.addShape(carBodyShape);
        carBody.position.x = carBodyMesh.position.x;
        carBody.position.y = carBodyMesh.position.y;
        carBody.position.z = carBodyMesh.position.z;
        world.addBody(carBody);

        //front left wheel
        const wheelLFGeometry = new THREE.CylinderGeometry(0.033, 0.033, 0.02);
        wheelLFGeometry.rotateZ(Math.PI / 2);
        const wheelLFMesh = new THREE.Mesh(wheelLFGeometry, phongMaterial);
        wheelLFMesh.position.x = -0.1;
        wheelLFMesh.position.y = 1;
        wheelLFMesh.position.z = -0.1;
        wheelLFMesh.castShadow = true;
        scene.add(wheelLFMesh);
        const wheelLFShape = new CANNON.Sphere(0.033);
        const wheelLFBody = new CANNON.Body({
            mass: 1,
            material: wheelMaterial,
        });
        wheelLFBody.addShape(wheelLFShape);
        wheelLFBody.position.x = wheelLFMesh.position.x;
        wheelLFBody.position.y = wheelLFMesh.position.y;
        wheelLFBody.position.z = wheelLFMesh.position.z;
        world.addBody(wheelLFBody);

        //front right wheel
        const wheelRFGeometry = new THREE.CylinderGeometry(0.033, 0.033, 0.02);
        wheelRFGeometry.rotateZ(Math.PI / 2);
        const wheelRFMesh = new THREE.Mesh(wheelRFGeometry, phongMaterial);
        wheelRFMesh.position.y = 1;
        wheelRFMesh.position.x = 0.1;
        wheelRFMesh.position.z = -0.1;
        wheelRFMesh.castShadow = true;
        scene.add(wheelRFMesh);
        const wheelRFShape = new CANNON.Sphere(0.033);
        const wheelRFBody = new CANNON.Body({
            mass: 1,
            material: wheelMaterial,
        });
        wheelRFBody.addShape(wheelRFShape);
        wheelRFBody.position.x = wheelRFMesh.position.x;
        wheelRFBody.position.y = wheelRFMesh.position.y;
        wheelRFBody.position.z = wheelRFMesh.position.z;
        world.addBody(wheelRFBody);

        //back left wheel
        const wheelLBGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.033);
        wheelLBGeometry.rotateZ(Math.PI / 2);
        const wheelLBMesh = new THREE.Mesh(wheelLBGeometry, phongMaterial);
        wheelLBMesh.position.y = 1;
        wheelLBMesh.position.x = -0.1;
        wheelLBMesh.position.z = 0.1;
        wheelLBMesh.castShadow = true;
        scene.add(wheelLBMesh);
        const wheelLBShape = new CANNON.Sphere(0.04);
        const wheelLBBody = new CANNON.Body({
            mass: 1,
            material: wheelMaterial,
        });
        wheelLBBody.addShape(wheelLBShape);
        wheelLBBody.position.x = wheelLBMesh.position.x;
        wheelLBBody.position.y = wheelLBMesh.position.y;
        wheelLBBody.position.z = wheelLBMesh.position.z;
        world.addBody(wheelLBBody);

        //back right wheel
        const wheelRBGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.033);
        wheelRBGeometry.rotateZ(Math.PI / 2);
        const wheelRBMesh = new THREE.Mesh(wheelRBGeometry, phongMaterial);
        wheelRBMesh.position.y = 1;
        wheelRBMesh.position.x = 0.1;
        wheelRBMesh.position.z = 0.1;
        wheelRBMesh.castShadow = true;
        scene.add(wheelRBMesh);
        const wheelRBShape = new CANNON.Sphere(0.04);
        const wheelRBBody = new CANNON.Body({
            mass: 1,
            material: wheelMaterial,
        });
        wheelRBBody.addShape(wheelRBShape);
        wheelRBBody.position.x = wheelRBMesh.position.x;
        wheelRBBody.position.y = wheelRBMesh.position.y;
        wheelRBBody.position.z = wheelRBMesh.position.z;
        world.addBody(wheelRBBody);

        const leftFrontAxis = new CANNON.Vec3(1, 0, 0);
        const rightFrontAxis = new CANNON.Vec3(1, 0, 0);
        const leftBackAxis = new CANNON.Vec3(1, 0, 0);
        const rightBackAxis = new CANNON.Vec3(1, 0, 0);

        const constraintLF = new CANNON.HingeConstraint(carBody, wheelLFBody, {
            pivotA: new CANNON.Vec3(-0.1, -0.05, -0.1),
            axisA: leftFrontAxis,
            maxForce: 0.99,
        });
        world.addConstraint(constraintLF);
        const constraintRF = new CANNON.HingeConstraint(carBody, wheelRFBody, {
            pivotA: new CANNON.Vec3(0.1, -0.05, -0.1),
            axisA: rightFrontAxis,
            maxForce: 0.99,
        });
        world.addConstraint(constraintRF);
        const constraintLB = new CANNON.HingeConstraint(carBody, wheelLBBody, {
            pivotA: new CANNON.Vec3(-0.1, -0.05, 0.1),
            axisA: leftBackAxis,
            maxForce: 0.99,
        });
        world.addConstraint(constraintLB);
        const constraintRB = new CANNON.HingeConstraint(carBody, wheelRBBody, {
            pivotA: new CANNON.Vec3(0.1, -0.05, 0.1),
            axisA: rightBackAxis,
            maxForce: 0.99,
        });
        world.addConstraint(constraintRB);

        //rear wheel drive
        const accelMotorForce = 0.004;
        const brakeMotorForce = 1.0;
        constraintLB.setMotorMaxForce(accelMotorForce);
        constraintRB.setMotorMaxForce(accelMotorForce);
        constraintLF.setMotorMaxForce(brakeMotorForce);
        constraintRF.setMotorMaxForce(brakeMotorForce);
        constraintLB.enableMotor();
        constraintRB.enableMotor();

        scene.add(new THREE.AmbientLight(0x404040));
        const sun = new THREE.DirectionalLight(0xffffff, 0.6);
        sun.position.set(-1.1, 1, 0.9);
        sun.castShadow = true;
        sun.shadow.mapSize.width = 1024;
        sun.shadow.mapSize.height = 1024;
        scene.add(sun);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas,
        });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setAnimationLoop(animation);

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            renderer.setSize(canvas.offsetWidth, canvas.offsetHeight, false);
            camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", resize);
        resize();

        const controls = new OrbitControls(camera, renderer.domElement);

        const clock = new THREE.Clock();

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

        // animation
        function animation(time) {
            const delta = Math.min(clock.getDelta(), 0.1);
            if (delta > 0) {
                world.step(delta);
            }

            box.position.set(
                boxBody.position.x,
                boxBody.position.y,
                boxBody.position.z
            );
            box.quaternion.set(
                boxBody.quaternion.x,
                boxBody.quaternion.y,
                boxBody.quaternion.z,
                boxBody.quaternion.w
            );
            carBodyMesh.position.set(
                carBody.position.x,
                carBody.position.y,
                carBody.position.z
            );
            carBodyMesh.quaternion.set(
                carBody.quaternion.x,
                carBody.quaternion.y,
                carBody.quaternion.z,
                carBody.quaternion.w
            );
            wheelLFMesh.position.set(
                wheelLFBody.position.x,
                wheelLFBody.position.y,
                wheelLFBody.position.z
            );
            wheelLFMesh.quaternion.set(
                wheelLFBody.quaternion.x,
                wheelLFBody.quaternion.y,
                wheelLFBody.quaternion.z,
                wheelLFBody.quaternion.w
            );
            wheelRFMesh.position.set(
                wheelRFBody.position.x,
                wheelRFBody.position.y,
                wheelRFBody.position.z
            );
            wheelRFMesh.quaternion.set(
                wheelRFBody.quaternion.x,
                wheelRFBody.quaternion.y,
                wheelRFBody.quaternion.z,
                wheelRFBody.quaternion.w
            );
            wheelLBMesh.position.set(
                wheelLBBody.position.x,
                wheelLBBody.position.y,
                wheelLBBody.position.z
            );
            wheelLBMesh.quaternion.set(
                wheelLBBody.quaternion.x,
                wheelLBBody.quaternion.y,
                wheelLBBody.quaternion.z,
                wheelLBBody.quaternion.w
            );
            wheelRBMesh.position.set(
                wheelRBBody.position.x,
                wheelRBBody.position.y,
                wheelRBBody.position.z
            );
            wheelRBMesh.quaternion.set(
                wheelRBBody.quaternion.x,
                wheelRBBody.quaternion.y,
                wheelRBBody.quaternion.z,
                wheelRBBody.quaternion.w
            );

            if (W) {
                constraintLB.setMotorSpeed(100);
                constraintRB.setMotorSpeed(100);
            } else if (S) {
                constraintLB.setMotorSpeed(-20);
                constraintRB.setMotorSpeed(-20);
            } else {
                constraintLB.setMotorSpeed(0);
                constraintRB.setMotorSpeed(0);
            }
            if (A) {
                constraintLF.axisA.z = -0.5;
                constraintRF.axisA.z = -0.5;
            } else if (D) {
                constraintLF.axisA.z = 0.5;
                constraintRF.axisA.z = 0.5;
            } else {
                constraintLF.axisA.z = 0;
                constraintRF.axisA.z = 0;
            }
            if (SPACE) {
                constraintLB.setMotorMaxForce(brakeMotorForce);
                constraintRB.setMotorMaxForce(brakeMotorForce);
                constraintLB.setMotorSpeed(0);
                constraintRB.setMotorSpeed(0);
                constraintLF.enableMotor();
                constraintRF.enableMotor();
                constraintLF.setMotorSpeed(0);
                constraintRF.setMotorSpeed(0);
            } else {
                constraintLF.disableMotor();
                constraintRF.disableMotor();
                constraintLB.setMotorMaxForce(accelMotorForce);
                constraintRB.setMotorMaxForce(accelMotorForce);
            }

            controls.update();
            renderer.render(scene, camera);
        }
    });
</script>

<canvas bind:this={canvas} />

<style>
    canvas {
        width: 100%;
        height: 100vh;
    }
</style>
