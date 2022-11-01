import * as THREE from "three";
import * as CANNON from "cannon-es";
import { GameObject } from "./GameObject";

export const CAR_COLLISION_FILTER_GROUP = 8;

export class BasicCar extends GameObject {
    constructor(x, y, z, material, wheelMaterial, mass = 1, wheelFriction = 0.25, wheelRestitution = 0.1) {
        super();

        const wheelPhyMaterial = new CANNON.Material({ friction: wheelFriction, restitution: wheelRestitution });

        const carBodyGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.2);
        const carBodyMesh = new THREE.Mesh(carBodyGeometry, material);
        carBodyMesh.castShadow = true;
        carBodyMesh.receiveShadow = true;
        carBodyMesh.position.x = x;
        carBodyMesh.position.y = y;
        carBodyMesh.position.z = z;
        carBodyMesh.updateMatrix();
        this.meshes.push(carBodyMesh);
        this.carBodyMesh = carBodyMesh;
        const carBodyShape = new CANNON.Box(new CANNON.Vec3(0.05, 0.05, 0.1));
        const carBody = new CANNON.Body({ mass: mass / 2, collisionFilterGroup: CAR_COLLISION_FILTER_GROUP, collisionFilterMask: ~CAR_COLLISION_FILTER_GROUP });
        carBody.addShape(carBodyShape);
        carBody.position.x = carBodyMesh.position.x;
        carBody.position.y = carBodyMesh.position.y;
        carBody.position.z = carBodyMesh.position.z;
        this.bodies.push(carBody);

        //front left wheel
        const wheelLFGeometry = new THREE.CylinderGeometry(0.033, 0.033, 0.02, 16);
        wheelLFGeometry.rotateZ(Math.PI / 2);
        const wheelLFMesh = new THREE.Mesh(wheelLFGeometry, wheelMaterial);
        wheelLFMesh.castShadow = true;
        wheelLFMesh.receiveShadow = true;
        wheelLFMesh.position.x = -0.1 + carBodyMesh.position.x;
        wheelLFMesh.position.y = -0.05 + carBodyMesh.position.y;
        wheelLFMesh.position.z = -0.1 + carBodyMesh.position.z;
        this.meshes.push(wheelLFMesh);
        this.wheelLFMesh = wheelLFMesh;
        const wheelLFShape = new CANNON.Sphere(0.033);
        // const wheelLFShape = new CANNON.Cylinder(0.033, 0.033, 0.02, 16);
        // wheelLFShape.transformAllPoints(new CANNON.Vec3(), new CANNON.Quaternion().setFromAxisAngle(new CANNON.Vec3(0, 0, 1), Math.PI / 2));
        const wheelLFBody = new CANNON.Body({
            mass: mass / 8,
            material: wheelPhyMaterial,
            collisionFilterGroup: CAR_COLLISION_FILTER_GROUP,
            collisionFilterMask: ~CAR_COLLISION_FILTER_GROUP
        });
        wheelLFBody.addShape(wheelLFShape);
        wheelLFBody.position.x = wheelLFMesh.position.x;
        wheelLFBody.position.y = wheelLFMesh.position.y;
        wheelLFBody.position.z = wheelLFMesh.position.z;
        this.bodies.push(wheelLFBody);

        //front right wheel
        const wheelRFGeometry = new THREE.CylinderGeometry(0.033, 0.033, 0.02, 16);
        wheelRFGeometry.rotateZ(Math.PI / 2);
        const wheelRFMesh = new THREE.Mesh(wheelRFGeometry, wheelMaterial);
        wheelRFMesh.castShadow = true;
        wheelRFMesh.receiveShadow = true;
        wheelRFMesh.position.x = 0.1 + carBodyMesh.position.x;
        wheelRFMesh.position.y = -0.05 + carBodyMesh.position.y;
        wheelRFMesh.position.z = -0.1 + carBodyMesh.position.z;
        this.meshes.push(wheelRFMesh);
        this.wheelRFMesh = wheelRFMesh;
        const wheelRFShape = new CANNON.Sphere(0.033);
        const wheelRFBody = new CANNON.Body({
            mass: 1,
            material: wheelPhyMaterial,
            collisionFilterGroup: CAR_COLLISION_FILTER_GROUP,
            collisionFilterMask: ~CAR_COLLISION_FILTER_GROUP
        });
        wheelRFBody.addShape(wheelRFShape);
        wheelRFBody.position.x = wheelRFMesh.position.x;
        wheelRFBody.position.y = wheelRFMesh.position.y;
        wheelRFBody.position.z = wheelRFMesh.position.z;
        this.bodies.push(wheelRFBody);

        //back left wheel
        const wheelLBGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.033);
        wheelLBGeometry.rotateZ(Math.PI / 2);
        const wheelLBMesh = new THREE.Mesh(wheelLBGeometry, wheelMaterial);
        wheelLBMesh.castShadow = true;
        wheelLBMesh.receiveShadow = true;
        wheelLBMesh.position.x = -0.1 + carBodyMesh.position.x;
        wheelLBMesh.position.y = -0.05 + carBodyMesh.position.y;
        wheelLBMesh.position.z = 0.1 + carBodyMesh.position.z;
        this.meshes.push(wheelLBMesh);
        this.wheelLBMesh = wheelLBMesh;
        const wheelLBShape = new CANNON.Sphere(0.04);
        const wheelLBBody = new CANNON.Body({
            mass: 1,
            material: wheelPhyMaterial,
            collisionFilterGroup: CAR_COLLISION_FILTER_GROUP,
            collisionFilterMask: ~CAR_COLLISION_FILTER_GROUP
        });
        wheelLBBody.addShape(wheelLBShape);
        wheelLBBody.position.x = wheelLBMesh.position.x;
        wheelLBBody.position.y = wheelLBMesh.position.y;
        wheelLBBody.position.z = wheelLBMesh.position.z;
        this.bodies.push(wheelLBBody);

        //back right wheel
        const wheelRBGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.033);
        wheelRBGeometry.rotateZ(Math.PI / 2);
        const wheelRBMesh = new THREE.Mesh(wheelRBGeometry, wheelMaterial);
        wheelRBMesh.castShadow = true;
        wheelRBMesh.receiveShadow = true;
        wheelRBMesh.position.x = 0.1 + carBodyMesh.position.x;
        wheelRBMesh.position.y = -0.05 + carBodyMesh.position.y;
        wheelRBMesh.position.z = 0.1 + carBodyMesh.position.z;
        this.meshes.push(wheelRBMesh);
        this.wheelRBMesh = wheelRBMesh;
        const wheelRBShape = new CANNON.Sphere(0.04);
        const wheelRBBody = new CANNON.Body({
            mass: 1,
            material: wheelPhyMaterial,
            collisionFilterGroup: CAR_COLLISION_FILTER_GROUP,
            collisionFilterMask: ~CAR_COLLISION_FILTER_GROUP
        });
        wheelRBBody.addShape(wheelRBShape);
        wheelRBBody.position.x = wheelRBMesh.position.x;
        wheelRBBody.position.y = wheelRBMesh.position.y;
        wheelRBBody.position.z = wheelRBMesh.position.z;
        this.bodies.push(wheelRBBody);

        const leftFrontAxis = new CANNON.Vec3(1, 0, 0);
        const rightFrontAxis = new CANNON.Vec3(1, 0, 0);
        const leftBackAxis = new CANNON.Vec3(1, 0, 0);
        const rightBackAxis = new CANNON.Vec3(1, 0, 0);

        /** @type {CANNON.HingeConstraint} */
        this.constraintLF = new CANNON.HingeConstraint(carBody, wheelLFBody, {
            pivotA: new CANNON.Vec3(-0.1, -0.05, -0.1),
            axisA: leftFrontAxis,
            maxForce: 0.99,
        });
        this.constraints.push(this.constraintLF);
        /** @type {CANNON.HingeConstraint} */
        this.constraintRF = new CANNON.HingeConstraint(carBody, wheelRFBody, {
            pivotA: new CANNON.Vec3(0.1, -0.05, -0.1),
            axisA: rightFrontAxis,
            maxForce: 0.99,
        });
        this.constraints.push(this.constraintRF);
        /** @type {CANNON.HingeConstraint} */
        this.constraintLB = new CANNON.HingeConstraint(carBody, wheelLBBody, {
            pivotA: new CANNON.Vec3(-0.1, -0.05, 0.1),
            axisA: leftBackAxis,
            maxForce: 0.99,
        });
        this.constraints.push(this.constraintLB);
        /** @type {CANNON.HingeConstraint} */
        this.constraintRB = new CANNON.HingeConstraint(carBody, wheelRBBody, {
            pivotA: new CANNON.Vec3(0.1, -0.05, 0.1),
            axisA: rightBackAxis,
            maxForce: 0.99,
        });
        this.constraints.push(this.constraintRB);

        //rear wheel drive
        this.accelMotorForce = 0.004;
        this.brakeMotorForce = 1.0;
        this.constraintLB.setMotorMaxForce(this.accelMotorForce);
        this.constraintRB.setMotorMaxForce(this.accelMotorForce);
        this.constraintLF.setMotorMaxForce(this.brakeMotorForce);
        this.constraintRF.setMotorMaxForce(this.brakeMotorForce);
        this.constraintLB.enableMotor();
        this.constraintRB.enableMotor();
    }

    /**
     * Returns the sensor rays on the car.
     * 
     * @returns {THREE.Raycaster[]} The rays corresponding to the sensors on the car.
     */
    getRays() {
        let forwardDir1 = this.wheelLFMesh.position.clone().sub(this.wheelLBMesh.position).normalize();
        let forwardDir2 = this.wheelRFMesh.position.clone().sub(this.wheelRBMesh.position).normalize();
        let forwardDir = forwardDir1.clone().add(forwardDir2).divideScalar(2);
        let sideDir1 = this.wheelLBMesh.position.clone().sub(this.wheelRBMesh.position).normalize();
        let sideDir2 = this.wheelLFMesh.position.clone().sub(this.wheelRFMesh.position).normalize();
        let sideDir = sideDir1.clone().add(sideDir2).normalize();
        let upDir = forwardDir.clone().cross(sideDir);

        let middlePos = this.carBodyMesh.position.clone().add(forwardDir.clone().multiplyScalar(0.1));

        let angles = [0, -15, 15, -30, 30, -45, 45, -60, 60, -75, 75, -90, 90].map(angle => angle * Math.PI / 180);
        let rays = angles.map(angle => {
            let dir = forwardDir.clone().multiplyScalar(Math.cos(angle)).add(sideDir.clone().multiplyScalar(Math.sin(angle)));
            let from = middlePos.clone().add(sideDir.clone().multiplyScalar(0.05 * Math.sin(angle)));
            let ray = new THREE.Raycaster(from, dir, 0.01, 1.0);
            return ray;
        });
        return rays;
    }

    /**
     * Returns the position of the car.
     * 
     * @return {THREE.Vector3} The position of the car.
     */
    getPosition() {
        return this.carBodyMesh.position.clone();
    }

    /**
     * Returns the forward direction of the car.
     * 
     * @return {THREE.Vector3} The forward direction of the car.
     */
    getForwardDir() {
        let forwardDir1 = this.wheelLFMesh.position.clone().sub(this.wheelLBMesh.position).normalize();
        let forwardDir2 = this.wheelRFMesh.position.clone().sub(this.wheelRBMesh.position).normalize();
        return forwardDir1.clone().add(forwardDir2).divideScalar(2);
    }

    rotateY(angle) {
        this.bodies.forEach(body => {
            body.quaternion = body.quaternion.mult(new CANNON.Quaternion().setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -angle));
        });
    }

    /**
     * Applies the given inputs to the car body.
     * 
     * @param {boolean} W Whether the W key is pressed.
     * @param {boolean} A Whether the A key is pressed.
     * @param {boolean} S Whether the S key is pressed.
     * @param {boolean} D Whether the D key is pressed.
     * @param {boolean} SPACE Whether the SPACE key is pressed.
     */
    applyInput(W, A, S, D, SPACE) {
        if (W) {
            this.constraintLB.setMotorSpeed(100);
            this.constraintRB.setMotorSpeed(100);
        } else if (S) {
            this.constraintLB.setMotorSpeed(-20);
            this.constraintRB.setMotorSpeed(-20);
        } else {
            this.constraintLB.setMotorSpeed(0);
            this.constraintRB.setMotorSpeed(0);
        }
        if (A) {
            this.constraintLF.axisA.z = -0.5;
            this.constraintRF.axisA.z = -0.5;
        } else if (D) {
            this.constraintLF.axisA.z = 0.5;
            this.constraintRF.axisA.z = 0.5;
        } else {
            this.constraintLF.axisA.z = 0;
            this.constraintRF.axisA.z = 0;
        }
        if (SPACE) {
            this.constraintLB.setMotorMaxForce(this.brakeMotorForce);
            this.constraintRB.setMotorMaxForce(this.brakeMotorForce);
            this.constraintLB.setMotorSpeed(0);
            this.constraintRB.setMotorSpeed(0);
            this.constraintLF.enableMotor();
            this.constraintRF.enableMotor();
            this.constraintLF.setMotorMaxForce(this.brakeMotorForce);
            this.constraintRF.setMotorMaxForce(this.brakeMotorForce);
            this.constraintLF.setMotorSpeed(0);
            this.constraintRF.setMotorSpeed(0);
        } else {
            this.constraintLF.disableMotor();
            this.constraintRF.disableMotor();
            this.constraintLB.setMotorMaxForce(this.accelMotorForce);
            this.constraintRB.setMotorMaxForce(this.accelMotorForce);
        }
    }
}