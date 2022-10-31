import * as THREE from "three";
import * as CANNON from "cannon-es";
import { BoxObject, GameObject } from "./GameObject";

export const BARRIER_RAYCAST_LAYER = 4;
export const BARRIER_COLLISION_FILTER_GROUP = 16;

const roadLineLen = 0.19;
const lineGeomerty = new THREE.BoxGeometry(0.04, 0.1, roadLineLen);
const lineMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
const roadMaterial = new THREE.MeshLambertMaterial({
    color: 0x515151,
    wireframe: false,
});

export class RaceTrack extends GameObject {
    constructor(roadPoints, roadWidth = 1.0, resolution = 0.15) {
        super();
        /** @type {THREE.CatmullRomCurve3} */
        this.roadSpline = new THREE.CatmullRomCurve3(roadPoints, false, "catmullrom", 0.3);
        this.roadWidth = roadWidth;
        this.roadLength = this.roadSpline.getLength();

        let arcLen = this.roadSpline.getLength();
        let roadLineNum = Math.floor(arcLen / roadLineLen / 2);
        for (let i = 1; i < roadLineNum; i += 2) {
            let u = i / roadLineNum;
            let p = this.roadSpline.getPointAt(u);
            let t = this.roadSpline.getTangentAt(u);
            let lineMesh = new THREE.Mesh(lineGeomerty, lineMaterial);
            lineMesh.position.x = p.x;
            lineMesh.position.y = p.y + 0.065;
            lineMesh.position.z = p.z;
            lineMesh.rotateY(Math.atan2(t.x, t.z));
            this.meshes.push(lineMesh);
        }

        let extrudeSettings = {
            steps: Math.floor(this.roadSpline.getLength() / resolution),
            bevelEnabled: false,
            extrudePath: this.roadSpline,
        };

        let pts = [new THREE.Vector2(0, -roadWidth / 2), new THREE.Vector2(0, this.roadWidth / 2)];
        let shape = new THREE.Shape(pts);
        let geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        let roadMesh = new THREE.Mesh(geometry, roadMaterial);
        roadMesh.translateY(0.11);
        this.meshes.push(roadMesh);

        {
            let barrierMaterial = new THREE.MeshLambertMaterial({
                color: 0xffea00,
                wireframe: false,
            });
            const barrierBody = new CANNON.Body({ mass: 0 });

            /** @type {THREE.Vector3[]} */
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
            for (let i = 1; i < leftPoints.length; i++) {
                let t = leftPoints[i].clone().sub(leftPoints[i - 1]);
                let p = leftPoints[i]
                    .clone()
                    .add(leftPoints[i - 1])
                    .divideScalar(2);
                let barrier = new BoxObject(
                    p.x,
                    p.y + 0.09,
                    p.z,
                    t.length(),
                    0.2,
                    0.01,
                    barrierMaterial,
                    0
                );
                barrier.rotateY(Math.atan2(-t.z, t.x));
                barrier.meshes[0].layers.enable(BARRIER_RAYCAST_LAYER);
                barrier.meshes[0].receiveShadow = false;
                barrierBody.addShape(barrier.bodies[0].shapes[0], barrier.bodies[0].position, barrier.bodies[0].quaternion);
                this.meshes.push(barrier.meshes[0]);
            }

            /** @type {THREE.Vector3[]} */
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
            for (let i = 1; i < rightPoints.length; i++) {
                let t = rightPoints[i].clone().sub(rightPoints[i - 1]);
                let p = rightPoints[i]
                    .clone()
                    .add(rightPoints[i - 1])
                    .divideScalar(2);
                let barrier = new BoxObject(
                    p.x,
                    p.y + 0.09,
                    p.z,
                    t.length(),
                    0.2,
                    0.01,
                    barrierMaterial,
                    0
                );
                barrier.rotateY(Math.atan2(-t.z, t.x));
                barrier.meshes[0].layers.enable(BARRIER_RAYCAST_LAYER);
                barrier.meshes[0].receiveShadow = false;
                barrierBody.addShape(barrier.bodies[0].shapes[0], barrier.bodies[0].position, barrier.bodies[0].quaternion);
                this.meshes.push(barrier.meshes[0]);
            }

            barrierBody.collisionFilterGroup =
                BARRIER_COLLISION_FILTER_GROUP;
            barrierBody.collisionFilterMask =
                ~BARRIER_COLLISION_FILTER_GROUP;
            this.bodies.push(barrierBody);
        }
    }

    syncMeshesToBodies() {
    }
}