import { Injectable } from '@angular/core';
import * as THREE from 'three';

import { camera } from '../camera/camera';
import { renderer } from '../renderer/renderer';
import { scene } from '../scene/scene';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  private sizes: { width: number; height: number } = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  public load(canvasElement: HTMLCanvasElement): void {
    // Scene
    const SCENE = scene();

    // Objects
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    SCENE.add(cube);

    // Camera
    const CAMERA = camera();
    CAMERA.position.set(0, 0, 3);
    SCENE.add(CAMERA);

    // Renderer
    const RENREDER = renderer(canvasElement);
    RENREDER.setSize(this.sizes.width, this.sizes.height);
    RENREDER.render(SCENE, CAMERA);

    // Auto resize
    this.autoResize(CAMERA, RENREDER);

    // Animation
    this.animate();
  }

  private autoResize(
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
  ): void {
    window.addEventListener('resize', () => {
      this.sizes.width = window.innerWidth;
      this.sizes.height = window.innerHeight;

      // Update camera aspect ratio
      camera.aspect = this.sizes.width / this.sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer size
      renderer.setSize(this.sizes.width, this.sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  private animate(): void {
    const tick = () => {
      requestAnimationFrame(tick);
    };

    tick();
  }
}
