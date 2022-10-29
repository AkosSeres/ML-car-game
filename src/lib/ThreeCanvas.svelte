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

        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const material = new THREE.MeshNormalMaterial();

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas,
        });
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
