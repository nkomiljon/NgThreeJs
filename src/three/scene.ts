import * as THREE from 'three';

import { CUBE } from './cube';
import { LIGHT } from './light';
import { TORUS_KNOT_MESH } from './mesh';

export const SCENE = new THREE.Scene();

SCENE.add(new THREE.AmbientLight(0x666666));
SCENE.add(LIGHT);
SCENE.add(CUBE);
SCENE.add(TORUS_KNOT_MESH);
