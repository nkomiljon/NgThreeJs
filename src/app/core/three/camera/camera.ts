import * as THREE from 'three';

export function camera(): THREE.PerspectiveCamera {
  // Create a perspective camera with the following parameters:
  const CAMERA = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  return CAMERA;
}
