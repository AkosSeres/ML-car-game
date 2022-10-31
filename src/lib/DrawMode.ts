import { GameWorld } from "./GameWorld";
import { Mode } from "./Mode";
import { RaceTrack } from "./RaceTrack";
import * as THREE from "three";

const ringGeometry = new THREE.RingGeometry(0.45, 0.5, 32, 1);
ringGeometry.rotateX(Math.PI / 2);
const cursorRingMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
const startRingMaterial = new THREE.MeshBasicMaterial({ color: 0xFFA500, side: THREE.DoubleSide });
const endRingMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00, side: THREE.DoubleSide });
const midRingMaterial = new THREE.MeshBasicMaterial({ color: 0x0000FF, side: THREE.DoubleSide });

export class DrawMode implements Mode {
    gameWorld: GameWorld;
    raycaster: THREE.Raycaster;
    pointer: THREE.Vector2;
    ring: THREE.Mesh;
    brushSize: number = 1;
    onPointerMove: (e: PointerEvent) => void;
    onMouseUp: (e: MouseEvent) => void;
    onMouseDown: (e: MouseEvent) => void;
    mouseDown: boolean;
    rings: THREE.Mesh[];
    road: RaceTrack;
    roadPoints: THREE.Vector3[];

    constructor(gameWorld) {
        this.gameWorld = gameWorld;

        this.roadPoints = [
            new THREE.Vector3(4.0, 0.0, 4.0),
            new THREE.Vector3(-4.0, 0.0, 4.0),
            new THREE.Vector3(-4.0, 0.0, 0.0),
            new THREE.Vector3(4.0, 0.0, 0.0),
            new THREE.Vector3(4.0, 0.0, -4.0),
            new THREE.Vector3(-4.0, 0.0, -4.0),
        ];
        this.road = new RaceTrack(this.roadPoints, 1.0);
        this.gameWorld.addGameObject(this.road);

        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2(0, 0);
        this.onPointerMove = (e) => {
            this.pointer.x = (e.offsetX / this.gameWorld.canvas.offsetWidth) * 2 - 1;
            this.pointer.y = - (e.offsetY / this.gameWorld.canvas.offsetHeight) * 2 + 1;
        };
        this.ring = new THREE.Mesh(ringGeometry, cursorRingMaterial);
        this.ring.scale.set(this.brushSize, this.brushSize, this.brushSize);
        this.ring.castShadow = false;
        this.ring.receiveShadow = false;
        this.ring.renderOrder = 999;
        this.ring.material.depthTest = false;
        this.ring.material.depthWrite = false;
        this.rings = [];
        this.mouseDown = false;
        this.onMouseUp = (e) => {
            console.log("mouse up");
            if (e.button === 0) {
                this.endDrawing();
            }
            document.removeEventListener("mouseup", this.onMouseUp);
        };
        this.onMouseDown = (e) => {
            if (e.button === 0) {
                this.startDrawing();
                document.addEventListener("mouseup", this.onMouseUp);
            }
        };
    }

    startDrawing() {
        this.mouseDown = true;

        const startRing = new THREE.Mesh(ringGeometry, startRingMaterial);
        startRing.scale.set(this.brushSize, this.brushSize, this.brushSize);
        startRing.castShadow = false;
        startRing.receiveShadow = false;
        startRing.renderOrder = 999;
        startRing.material.depthTest = false;
        startRing.material.depthWrite = false;
        startRing.position.copy(this.ring.position);
        this.rings = [startRing];
        this.gameWorld.scene.add(startRing);
    }

    addDrawing() {
        const isClose = this.rings.some(r => {
            const dist = this.ring.position.distanceTo(r.position);
            return dist < this.brushSize;
        });
        if (isClose) return;
        const midRing = new THREE.Mesh(ringGeometry, midRingMaterial);
        midRing.scale.set(this.brushSize, this.brushSize, this.brushSize);
        midRing.castShadow = false;
        midRing.receiveShadow = false;
        midRing.renderOrder = 999;
        midRing.material.depthTest = false;
        midRing.material.depthWrite = false;
        midRing.position.copy(this.ring.position);
        this.rings.push(midRing);
        this.gameWorld.scene.add(midRing);
    }

    endDrawing() {
        this.mouseDown = false;

        this.gameWorld.removeGameObject(this.road);
        this.roadPoints = this.rings.map(r => r.position);
        this.road = new RaceTrack(this.roadPoints, this.brushSize);
        this.gameWorld.addGameObject(this.road);

        this.rings.forEach(r => { this.gameWorld.scene.remove(r) });
        this.rings = [];
    }

    update(delta: number) {
        this.raycaster.setFromCamera(this.pointer, this.gameWorld.camera);
        const intersects = this.raycaster.intersectObjects([this.gameWorld.ground.mesh]);
        if (intersects.length > 0) {
            const point = intersects[0].point;
            this.ring.position.set(point.x, point.y, point.z);
            this.ring.visible = true;
        } else {
            this.ring.visible = false;
        }
        this.ring.scale.set(this.brushSize, this.brushSize, this.brushSize);

        if (this.mouseDown) this.addDrawing();
    }

    activate() {
        this.gameWorld.controls.maxPolarAngle = 0;
        this.gameWorld.controls.minAzimuthAngle = 0;
        this.gameWorld.controls.maxAzimuthAngle = 0;
        this.gameWorld.controls.minDistance = 8;
        this.gameWorld.controls.maxDistance = 8;
        this.gameWorld.controls.target = new THREE.Vector3(0, 0, 0);

        this.ring.visible = false;
        this.gameWorld.scene.add(this.ring);

        this.gameWorld.canvas.addEventListener("pointermove", this.onPointerMove);
        this.gameWorld.canvas.addEventListener("mousedown", this.onMouseDown);
    }

    deactivate() {
        this.gameWorld.controls.maxPolarAngle = Math.PI;
        this.gameWorld.controls.minAzimuthAngle = Infinity;
        this.gameWorld.controls.maxAzimuthAngle = Infinity;
        this.gameWorld.controls.minDistance = 0;
        this.gameWorld.controls.maxDistance = 50;
        this.gameWorld.controls.reset();

        this.gameWorld.scene.remove(this.ring);

        this.gameWorld.canvas.removeEventListener("pointermove", this.onPointerMove);
        this.gameWorld.canvas.removeEventListener("mousedown", this.onMouseDown);
    }
}
