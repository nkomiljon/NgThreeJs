import { OrbitControls as Orbitcontrols } from 'three/examples/jsm/controls/OrbitControls';

import { CAMERA } from './camera';

export const CONTROLLER = new Orbitcontrols(CAMERA, document.body);
CONTROLLER.enableDamping = true;
CONTROLLER.dampingFactor = 0.05;
CONTROLLER.minDistance = 3;
CONTROLLER.maxDistance = 10;
CONTROLLER.minPolarAngle = Math.PI / 4;
CONTROLLER.maxPolarAngle = (3 * Math.PI) / 4;
