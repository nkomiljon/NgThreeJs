import * as THREE from 'three';

const COLOR = 0xaaaaaa;
export const LIGHT = new THREE.DirectionalLight(COLOR);
LIGHT.position.set(5, 12, 8);
LIGHT.castShadow = true;
LIGHT.intensity = 1;
LIGHT.shadow.camera.near = 0.1;
LIGHT.shadow.camera.far = 200;
LIGHT.shadow.camera.right = 10;
LIGHT.shadow.camera.left = -10;
LIGHT.shadow.camera.top = 10;
LIGHT.shadow.camera.bottom = -10;
LIGHT.shadow.mapSize.width = 512;
LIGHT.shadow.mapSize.height = 512;
LIGHT.shadow.radius = 4;
LIGHT.shadow.bias = -0.0005;