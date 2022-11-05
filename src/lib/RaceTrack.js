import * as THREE from "three";
import * as CANNON from "cannon-es";
import Offset from "polygon-offset";
import { GameObject } from "./GameObject";
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils';

export const BARRIER_RAYCAST_LAYER = 4;
export const BARRIER_COLLISION_FILTER_GROUP = 16;

const roadLineLen = 0.19;
const lineGeomerty = new THREE.BoxGeometry(0.04, 0.04, roadLineLen);
const lineMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
const roadMaterial = new THREE.MeshLambertMaterial({
    color: 0x515151,
    wireframe: false,
});
const startMaterial = new THREE.MeshPhongMaterial({ color: 0xffa500 });
const finishMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

/**
 * A GameObject that is a race track with road and barriers.
 */
export class RaceTrack extends GameObject {
    /**
     * Creates the road and the barriers as a GameObject.
     * 
     * @param {THREE.Vector3[]} roadPoints The points that describe the road's path.
     * @param {number} roadWidth The width of the road.
     * @param {number} resolution The size of the road's segments. The lower the value, the more detailed the road will be.
     */
    constructor(roadPoints, roadWidth = 1.0, resolution = 0.15) {
        super();
        /** @type {THREE.CatmullRomCurve3} */
        this.roadSpline = new THREE.CatmullRomCurve3(roadPoints, false, "catmullrom", 0.5);
        this.roadWidth = roadWidth;
        this.roadLength = this.roadSpline.getLength();

        let offset = new Offset();
        let barrierMaterial = new THREE.MeshPhongMaterial({
            color: 0xffea00,
            wireframe: false,
            side: THREE.DoubleSide,
        });
        const barrierBody = new CANNON.Body({
            mass: 0,
            material: new CANNON.Material({
                friction: 0.15,
                restitution: 0.25
            }),
        });
        const points = this.roadSpline.getSpacedPoints(Math.floor(this.roadLength / resolution));
        this.pointsIn2D = points.map(p => new THREE.Vector2(p.x, p.z));
        const polyLine = offset.data(points.map((p) => [p.x, p.z])).arcSegments(20).offsetLine(roadWidth / 2).map(pl => pl.map((p) => new THREE.Vector3(p[0], 0, p[1])));

        const barrierCurves = polyLine.map(pl => new THREE.CatmullRomCurve3(pl, true, "catmullrom", 0.05));
        const mshape = new THREE.Shape(barrierCurves[0].getSpacedPoints(Math.floor(barrierCurves[0].getLength() / resolution)).map(p => new THREE.Vector2(p.x, p.z)));

        for (let ii = 0; ii < polyLine.length; ii++) {
            const line = barrierCurves[ii];
            const linePoints = line.getSpacedPoints(Math.floor(line.getLength() / resolution));
            if (ii > 0) mshape.holes.push(new THREE.Path(linePoints.map(p => new THREE.Vector2(p.x, p.z))));
            for (let i = 1; i < linePoints.length; i++) {
                let t = linePoints[i].clone().sub(linePoints[i - 1]);
                let p = linePoints[i]
                    .clone()
                    .add(linePoints[i - 1])
                    .divideScalar(2);
                barrierBody.addShape(new CANNON.Box(
                    new CANNON.Vec3(t.length() / 2, 0.2 / 2, 0.01 / 2)),
                    new CANNON.Vec3(p.x, p.y + 0.1, p.z),
                    new CANNON.Quaternion().setFromAxisAngle(new CANNON.Vec3(0, 1, 0), Math.atan2(-t.z, t.x))
                );
            }
        }

        const barrierShape = new THREE.Shape([
            new THREE.Vector2(0.2, 0.005),
            new THREE.Vector2(-0.2, 0.005),
            new THREE.Vector2(-0.2, -0.005),
            new THREE.Vector2(0.2, -0.005),
            new THREE.Vector2(0.2, 0.005),
        ]);
        const barrierGeoms = barrierCurves.map((barrierCurve) =>
            new THREE.ExtrudeGeometry(barrierShape, {
                steps: Math.floor(barrierCurve.getLength() / resolution),
                extrudePath: barrierCurve,
            }));
        const barrierGeometry = BufferGeometryUtils.mergeBufferGeometries(barrierGeoms, false);
        const barrierMesh = new THREE.Mesh(barrierGeometry, barrierMaterial);
        this.barrierMesh = barrierMesh;
        barrierMesh.castShadow = false;
        barrierMesh.receiveShadow = false;
        barrierMesh.layers.enable(BARRIER_RAYCAST_LAYER);
        this.meshes.push(barrierMesh);

        let roadGeom = new THREE.ShapeGeometry(mshape);
        let road = new THREE.Mesh(roadGeom, roadMaterial);
        road.rotateX(Math.PI / 2);
        road.scale.setZ(-1);
        road.translateZ(-0.01);
        road.receiveShadow = true;
        this.meshes.push(road);

        let arcLen = this.roadSpline.getLength();
        let roadLineNum = Math.floor(arcLen / roadLineLen / 2);
        for (let i = 1; i < roadLineNum; i += 2) {
            let u = i / roadLineNum;
            let p = this.roadSpline.getPointAt(u);
            let t = this.roadSpline.getTangentAt(u);
            let lineMesh = new THREE.Mesh(lineGeomerty, lineMaterial);
            lineMesh.receiveShadow = true;
            lineMesh.castShadow = false;
            lineMesh.position.x = p.x;
            lineMesh.position.y = p.y;
            lineMesh.position.z = p.z;
            lineMesh.rotateY(Math.atan2(t.x, t.z));
            this.meshes.push(lineMesh);
        }

        const geometry = new THREE.CircleGeometry(this.roadWidth / 2, 16);
        geometry.rotateX(-Math.PI / 2);
        geometry.translate(roadPoints[0].x, 0.025, roadPoints[0].z);
        const circle = new THREE.Mesh(geometry, startMaterial);
        this.meshes.push(circle);
        const geometryEnd = new THREE.CircleGeometry(this.roadWidth / 2, 16);
        geometryEnd.rotateX(-Math.PI / 2);
        this.finishX = roadPoints[roadPoints.length - 1].x;
        this.finishZ = roadPoints[roadPoints.length - 1].z;
        geometryEnd.translate(this.finishX, 0.025, this.finishZ);
        const circleFinish = new THREE.Mesh(geometryEnd, finishMaterial);
        this.meshes.push(circleFinish);

        barrierBody.collisionFilterGroup =
            BARRIER_COLLISION_FILTER_GROUP;
        barrierBody.collisionFilterMask =
            ~BARRIER_COLLISION_FILTER_GROUP;
        this.bodies.push(barrierBody);
        /** @type {CANNON.Body} */
        this.barrrierBody = barrierBody;

        this.startX = roadPoints[0].x;
        this.startZ = roadPoints[0].z;
        const startTangent = this.roadSpline.getTangentAt(0);
        this.startRotation = -Math.atan2(-startTangent.z, startTangent.x) + Math.PI / 2;
        this.endX = roadPoints[roadPoints.length - 1].x;
        this.endZ = roadPoints[roadPoints.length - 1].z;
    }

    /**
     * Figures out if the given position is in the finish area of the track.
     * 
     * @param {number} x The x coordinate of the point.
     * @param {number} z The z coordinate of the point.
     * @returns {boolean} Whether the point is inside the finish area of the track.
     */
    isFinished(x, z) {
        return (this.finishX - x) ** 2 + (this.finishZ - z) ** 2 < this.roadWidth ** 2;
    }

    /**
     * Figures out how much of the track has been completed at the given point.
     * 
     * @param {number} x The x coordinate of the query point.
     * @param {number} z The z coordinate of the query point.
     * @returns The percentage of the track that the point has completed. Range is [0, 1].
     */
    amountCompleted(x, z) {
        const point = new THREE.Vector2(x, z);
        const distancesSq = this.pointsIn2D.map(p => p.distanceToSquared(point));
        return distancesSq.indexOf(Math.min(...distancesSq)) / (this.pointsIn2D.length - 1);
    }

    /**
     * The sync method is empty because the road and barriers are static.
     */
    syncMeshesToBodies() {
    }
}