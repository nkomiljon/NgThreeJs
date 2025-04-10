import * as THREE from 'three';

const TORUS_KNOT_GEOMETRY = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 100);
const TORUS_KNOT_MAT = new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0.1 });

export const TORUS_KNOT_MESH = new THREE.Mesh(TORUS_KNOT_GEOMETRY, TORUS_KNOT_MAT);
TORUS_KNOT_MESH.castShadow = true;
TORUS_KNOT_MESH.position.x = 2;