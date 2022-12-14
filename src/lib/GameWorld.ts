import * as THREE from "three";
import * as CANNON from "cannon-es";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import type { GameObject } from "./GameObject";
import { Ground } from "./Ground";
import type { RaceTrack } from "./RaceTrack";
import * as tf from "@tensorflow/tfjs";

/**
 * Class representing a game world. It contains and manages the renderer and the physics engine.
 */
export class GameWorld {
    canvas: HTMLCanvasElement;
    debug: boolean = false;
    timings: { renderStart: number, renderEnd: number, physicsStart: number, physicsEnd: number, uiStart: number, uiEnd: number } = { renderStart: 0, renderEnd: 0, physicsStart: 0, physicsEnd: 0, uiStart: 0, uiEnd: 0 };
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    gameObjects: GameObject[];
    world: CANNON.World;
    controls: OrbitControls;
    camera: THREE.PerspectiveCamera;
    cameraPosition: THREE.Vector3;
    cameraQuaternion: THREE.Quaternion;
    resizeFunction: EventListenerOrEventListenerObject | undefined;
    callback: (delta: number) => void;
    ground: Ground;
    raceTrack: RaceTrack;

    /**
     * Creates the game world by initializing the three.js scene and camera.
     * It also sets up the physics world.
     * 
     * @param {HTMLCanvasElement} canvas The canvas to render onto.
     */
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.createCamera();
        this.scene = new THREE.Scene();
        this.addLighting();
        this.createRenderer();
        this.enableAutoResizer();
        this.setupControls();
        this.createPhyiscsWorld();
        this.callback = () => { };

        let clock = new THREE.Clock();

        const animation = () => {
            const delta = Math.min(clock.getDelta(), 1 / 30);
            if (delta > 0) {
                this.update(delta);
            }
        }
        this.renderer.setAnimationLoop(animation);

        /** @type {GameObject[]} */
        this.gameObjects = [];
        this.ground = new Ground();
        this.addGameObject(this.ground);
    }

    /**
     * Updates and renders the world.
     */
    update(delta: number) {
        this.timings.physicsStart = performance.now();
        this.world.step(delta);
        this.gameObjects.forEach(obj => obj.syncMeshesToBodies());
        this.timings.physicsEnd = performance.now();
        this.timings.uiStart = performance.now();
        this.controls.target.x = Math.min(Math.max(this.controls.target.x, -10), 10);
        this.controls.target.y = Math.min(Math.max(this.controls.target.y, 0), 10);
        this.controls.target.z = Math.min(Math.max(this.controls.target.z, -10), 10);
        if (this.camera.position.y < 0) {
            const posLen = this.camera.position.length();
            this.camera.position.y = 0;
            this.camera.position.normalize();
            this.camera.position.multiplyScalar(posLen);
        }
        this.controls.update();
        this.cameraPosition.lerp(this.camera.position, 1 - 0.9 ** (delta / 0.016));
        this.cameraQuaternion.slerp(this.camera.quaternion, 1 - 0.9 ** (delta / 0.016));
        const camera = this.camera.clone();
        camera.position.copy(this.cameraPosition);
        camera.quaternion.copy(this.cameraQuaternion);
        this.callback(delta);
        this.timings.uiEnd = performance.now();
        this.timings.renderStart = performance.now();
        this.renderer.render(this.scene, camera);
        this.timings.renderEnd = performance.now();
        if (this.debug) this.renderDebug(delta);
        else this.clearDebug();
    }

    /**
     * Calls the given function before each render, but after the physics update.
     * 
     * @param callback The function to call.
     */
    requestCallbackBeforeRender(callback: (delta: number) => void) {
        this.callback = callback;
    }

    /**
     * Adds a GameObject to the world.
     * 
     * @param {GameObject} gameObject The GameObject to add.
     */
    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
        gameObject.meshes.forEach(mesh => this.scene.add(mesh));
        gameObject.bodies.forEach(body => this.world.addBody(body));
        gameObject.constraints.forEach(constraint => this.world.addConstraint(constraint));
    }

    /**
     * Removes the given GameObject from the world.
     * 
     * @param {GameObject} gameObject The GameObject to remove.
     */
    removeGameObject(gameObject) {
        this.gameObjects = this.gameObjects.filter(obj => obj !== gameObject);
        gameObject.meshes.forEach(mesh => this.scene.remove(mesh));
        gameObject.bodies.forEach(body => this.world.removeBody(body));
        gameObject.constraints.forEach(constraint => this.world.removeConstraint(constraint));
    }

    /**
     * Adds lights to the scene.
     */
    addLighting() {
        this.scene.add(new THREE.AmbientLight(0x404040));
        const sun = new THREE.DirectionalLight(0xffffff, 0.9);
        sun.position.set(-1.1, 1, 0.9);
        sun.castShadow = true;
        sun.shadow.mapSize.width = 1024;
        sun.shadow.mapSize.height = 1024;
        this.scene.add(sun);

        this.scene.fog = new THREE.Fog('black', 20, 30);
    }

    /**
     * Creates and initalizes a three.js renderer for the scene.
     */
    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: this.canvas,
        });
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    /**
     * Initializes the three.js camera and puts it into a default position.
     */
    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.01,
            100
        );
        this.camera.position.z = 6;
        this.camera.position.y = 3;
        this.camera.position.x = 6;
        this.cameraPosition = this.camera.position.clone();
        this.cameraQuaternion = this.camera.quaternion.clone();
    }

    /**
     * Initializes the physics world and sets the gravity to the default value.
     */
    createPhyiscsWorld() {
        this.world = new CANNON.World();
        this.world.gravity.set(0, -9.82, 0);
        this.world.allowSleep = true;
        this.world.broadphase = new CANNON.SAPBroadphase(this.world);
        (this.world.broadphase as CANNON.SAPBroadphase).axisIndex = 0;
    }

    /**
     * Sets the gravity of the physics world.
     * 
     * @param {number} x The x component of the gravity vector.
     * @param {number} y The y component of the gravity vector.
     * @param {number} z The z component of the gravity vector.
     */
    setGravity(x, y, z) {
        this.world.gravity.set(x, y, z);
    }

    /**
     * Enables auto resizing for the canvas and the renderer.
     */
    enableAutoResizer() {
        if (this.resizeFunction) return;
        const resize = () => {
            this.canvas.width = this.canvas.offsetWidth;
            this.canvas.height = this.canvas.offsetHeight;
            this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight, false);
            this.camera.aspect = this.canvas.offsetWidth / this.canvas.offsetHeight;
            this.camera.updateProjectionMatrix();
        };
        this.resizeFunction = resize;
        window.addEventListener("resize", resize);
        resize();
    }

    /**
     * Disables auto resizing for the canvas and the renderer.
     */
    disableAutoResizer() {
        if (this.resizeFunction)
            window.removeEventListener("resize", this.resizeFunction);
        this.resizeFunction = undefined;
    }

    /**
     * Sets up the controls for the camera.
     */
    setupControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = false;
    }

    /**
     * Resets the camera to its default position, depending on the track.
     */
    resetCamera() {
        this.controls.target.set(0, 0, 0);
        const startX = this.raceTrack.startX;
        const startZ = this.raceTrack.startZ;
        this.camera.position.set(startX, 0, startZ);
        this.camera.position.multiplyScalar(1.5);
        if (this.camera.position.length() < 4) this.camera.position.setLength(4);
        this.camera.position.y = 3;
        this.controls.minDistance = 0.1;
        this.controls.maxDistance = 20;
        this.controls.update();
    }


    /**
     * Renders the debug panel of the whole app to the canvas.
     */
    renderDebug(delta: number) {
        const tfInfo = tf.memory();
        const renderTime = this.timings.renderEnd - this.timings.renderStart;
        const uiTime = this.timings.uiEnd - this.timings.uiStart;
        const physicsTime = this.timings.physicsEnd - this.timings.physicsStart;
        document.getElementById("debug-element").innerText =
            `FPS: ${Math.round(1 / delta)}
            Delta: ${(renderTime + uiTime + physicsTime).toFixed(2)}ms, ${renderTime.toFixed(2)}ms render, ${physicsTime.toFixed(2)}ms physics, ${uiTime.toFixed(2)}ms UI
            Pysics bodies: ${this.world.bodies.length}
            Physics constraints: ${this.world.constraints.length}
            Game objects: ${this.gameObjects.length}
            Three Meshes: ${this.scene.children.length}
            Three Memory info: ${this.renderer.info.memory.geometries} geometries, ${this.renderer.info.memory.textures} textures
            Render info: ${this.renderer.info.render.calls} calls, ${this.renderer.info.render.frame} frame, ${this.renderer.info.render.lines} lines, ${this.renderer.info.render.points} points, ${this.renderer.info.render.triangles} triangles
            Program info: ${this.renderer.info.programs?.length} programs
            Tensorflow: ${tfInfo.numBytes} btyes, ${tfInfo.numDataBuffers} databuffers, ${tfInfo.numTensors} tensors, ${tfInfo.unreliable} unreliable`;
    }

    /**
     * Clears the debug panel.
     */
    clearDebug() {
        document.getElementById("debug-element").innerText = "";
    }
}
