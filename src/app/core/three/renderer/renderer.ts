import * as THREE from 'three';

export function renderer(
  canvasElement: HTMLCanvasElement,
): THREE.WebGLRenderer {
  // Create a WebGL renderer with the given canvas element
  const RENDER = new THREE.WebGLRenderer({
    canvas: canvasElement,
    alpha: false,
    powerPreference: 'high-performance',
  });

  return RENDER;
}
