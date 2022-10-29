<script>
    import * as THREE from "three";
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

        const geometry = new THREE.BoxGeometry(2, 0.2, 2);
        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);

        const box = new THREE.Mesh(
            new THREE.BoxGeometry(0.2, 0.2, 0.2),
            new THREE.MeshPhongMaterial({ color: 0xaa11aa })
        );
        box.translateY(0.2);
        box.castShadow = true;
        box.receiveShadow = true;
        scene.add(box);

        scene.add(new THREE.AmbientLight(0x404040));
        const sun = new THREE.DirectionalLight(0xffffff, 0.6);
        sun.position.set(-1, 1, 1);
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

        // animation
        function animation(time) {
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
