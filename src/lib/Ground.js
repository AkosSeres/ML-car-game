import * as THREE from "three";
import * as CANNON from "cannon-es";
import { GameObject } from "./GameObject";

const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

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
     * @param {number} visibleHeight The height of the ground in the renderer.
     */
    constructor(ylevel = 0, visibleWidth = 100, visibleHeight = 100) {
        super();
        this.ylevel = ylevel;
        const geometry = new THREE.PlaneGeometry(visibleWidth, visibleHeight);
        const mesh = new THREE.Mesh(geometry, groundMaterial);
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.y = ylevel;
        this.mesh = mesh;
        this.meshes.push(mesh);
        const shape = new CANNON.Plane();
        const body = new CANNON.Body({ mass: 0 });
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