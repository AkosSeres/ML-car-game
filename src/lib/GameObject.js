import * as THREE from "three";
import * as CANNON from "cannon-es";

export class GameObject {
    constructor() {
        /** @type {THREE.Mesh[]} */
        this.meshes = [];
        /** @type {CANNON.Body[]} */
        this.bodies = [];
        /** @type {CANNON.Constraint[]} */
        this.constraints = [];
    }

    /**
     * Syncs the position and rotation of the meshes with the physics bodies.
     */
    syncMeshesToBodies() {
        this.meshes.forEach((mesh, i) => {
            mesh.position.x = this.bodies[i].position.x;
            mesh.position.y = this.bodies[i].position.y;
            mesh.position.z = this.bodies[i].position.z;
            mesh.quaternion.x = this.bodies[i].quaternion.x;
            mesh.quaternion.y = this.bodies[i].quaternion.y;
            mesh.quaternion.z = this.bodies[i].quaternion.z;
            mesh.quaternion.w = this.bodies[i].quaternion.w;
        });
    }
}

/**
 * An example GameObject that is a box.
 */
export class BoxObject extends GameObject {
    /**
     * Creates a GameObject that is a box.
     * 
     * @param {number} x The x position of the box.
     * @param {number} y The y position of the box.
     * @param {number} z The z position of the box.
     * @param {number} width The width of the box.
     * @param {number} height The height of the box.
     * @param {number} depth The depth of the box.
     * @param {THREE.Material} material The material to use for the rendering of the box.
     * @param {number} mass The mass of the box. If set to 0, the box will be static.
     * @param {number} friction The friction coefficient of the box.
     * @param {number} restitution The restitution coefficient of the box.
     */
    constructor(x, y, z, width, height, depth, material, mass = 1, friction = 0.05, restitution = 0.1) {
        super();
        this.bodies.push(new CANNON.Body({
            mass,
            position: new CANNON.Vec3(x, y, z),
            shape: new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2)),
            material: new CANNON.Material({ friction, restitution }),
        }));
        let mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.translateX(x);
        mesh.translateY(y);
        mesh.translateZ(z);
        this.meshes.push(mesh);
    }

    /**
     * Rotates the object around the y axis by the given angle.
     * 
     * @param {number} angle Angle to rotate by in radians.
     */
    rotateY(angle) {
        this.bodies[0].quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), angle);
        this.meshes[0].rotateY(angle);
    }
}

/**
 * An example GameObject that is a sphere.
 */
export class SphereObject extends GameObject {
    /**
     * Creates a GameObject that is a sphere.
     * 
     * @param {number} x The x position of the sphere.
     * @param {number} y The y position of the sphere.
     * @param {number} z The z position of the sphere.
     * @param {number} radius The radius of the sphere.
     * @param {THREE.Material} material The material to use for the rendering of the sphere.
     * @param {number} mass The mass of the sphere. If set to 0, the sphere will be static.
     * @param {number} friction The friction coefficient of the sphere.
     * @param {number} restitution The restitution coefficient of the sphere.
     */
    constructor(x, y, z, radius, material, mass = 1, friction = 0.05, restitution = 0.1) {
        super();
        this.bodies.push(new CANNON.Body({
            mass,
            position: new CANNON.Vec3(x, y, z),
            shape: new CANNON.Sphere(radius),
            material: new CANNON.Material({ friction, restitution }),
        }));
        let mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 16), material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.translateX(x);
        mesh.translateY(y);
        mesh.translateZ(z);
        this.meshes.push(mesh);
    }
}