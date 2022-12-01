import * as THREE from "three";
import * as CANNON from "cannon-es";
import { GameObject } from "./GameObject";
import { BARRIER_RAYCAST_LAYER } from "./RaceTrack";
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils';

const groundMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff /*0x6e4efa*/ });
const groundFlatMaterial = new THREE.MeshLambertMaterial({ color: 'rgb(18, 24, 38)' });

/**
 * A GameObject that represents the ground. In size in the physics engine is infinite, but in the renderer it has a visible size.
 * The y direction is the up direction.
 */
export class Ground extends GameObject {
    /**
     * Creates the ground's GameObject.
     * 
     * @param {number} ylevel The y level of the ground.
     * @param {number} visibleWidth The width of the ground in the renderer.
     */
    constructor(ylevel = 0, visibleWidth = 100) {
        super();
        this.ylevel = ylevel;
        const boxesGeoms = [];
        for (let i = -visibleWidth / 2; i < visibleWidth / 2; i += 1) {
            for (let j = -visibleWidth / 2; j < visibleWidth / 2; j += 1) {
                const box = new THREE.BoxGeometry(0.97, 0.1, 0.97);
                box.translate(i, ylevel - 0.05, j);
                boxesGeoms.push(box);
            }
        }
        const groundGeom = BufferGeometryUtils.mergeBufferGeometries(boxesGeoms);
        const groundMesh = new THREE.Mesh(groundGeom, groundMaterial);
        this.meshes.push(groundMesh);
        boxesGeoms.forEach(geom => geom.dispose());
        const geometry = new THREE.PlaneGeometry(visibleWidth, visibleWidth);
        const mesh = new THREE.Mesh(geometry, groundFlatMaterial);
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.y = ylevel - 0.02;
        mesh.layers.enable(BARRIER_RAYCAST_LAYER);
        this.mesh = mesh;
        this.meshes.push(mesh);
        const shape = new CANNON.Plane();
        const body = new CANNON.Body({
            mass: 0, material: new CANNON.Material({
                friction: 0.12,
                restitution: 0.5
            })
        });
        body.addShape(shape);
        body.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
        body.position.y = ylevel;
        this.body = body;
        this.bodies.push(body);
    }

    /**
     * We do not sync the ground since it is static.
     */
    syncMeshesToBodies() {
    }
}