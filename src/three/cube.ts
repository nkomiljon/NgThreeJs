import * as THREE from 'three';


export const CUBE_GEOMETRY = new THREE.BoxGeometry();
export const CUBE_MATERIAL = new THREE.MeshLambertMaterial({ color: 0x0000ff });
export const CUBE = new THREE.Mesh(CUBE_GEOMETRY, CUBE_MATERIAL);

CUBE.castShadow = true;
CUBE.position.x = -1;
