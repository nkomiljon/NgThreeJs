import { Injectable } from '@angular/core';
import { GUI } from 'lil-gui';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';

import { SCENE } from '../scene';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  public init(): void {
    this.scene();
    this.camera();
    this.render();
    this.STATS();
    this.GUI();
  }

  public resize(): void {
    const { innerWidth, innerHeight } = window;
    const RENDERER = this.render();
    const CAMERA = this.camera();

    window.addEventListener(
      'resize',
      () => {
        CAMERA.aspect = innerWidth / innerHeight;
        CAMERA.updateProjectionMatrix();
        RENDERER.setSize(innerWidth, innerHeight);
        //RENDERER.render(SCENE, CAMERA);
      },
      false,
    );
  }

  private scene() {
    return SCENE;
  }

  private camera() {
    const { innerWidth, innerHeight } = window;
    const NUM_75 = 75;
    const NUM_0_1 = 0.1;
    const NUM_1000 = 1000;

    return new THREE.PerspectiveCamera(
      NUM_75,
      innerWidth / innerHeight,
      NUM_0_1,
      NUM_1000,
    );
  }

  private render() {
    const { innerWidth, innerHeight } = window;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(innerWidth, innerHeight);

    //const popoverEl = this.popover();
    //renderer.domElement.appendChild(popoverEl);
    document.body.appendChild(renderer.domElement);

    return renderer;
  }

  private STATS() {
    const stats = Stats();
    document.body.appendChild(stats.dom);
  }

  private GUI(): void {
    // Add GUI
    const _GUI = new GUI();
    const props = {
      cubeSpeed: 0.01,
      toursSpeed: 0.01,
    };
    _GUI.add(props, 'cubeSpeed', -0.2, 0.2, 0.01);
    _GUI.add(props, 'toursSpeed', -0.2, 0.2, 0.01);
  }

  private popover(): HTMLDivElement {
    const popover = document.createElement('div');
    popover.classList.add('popover');
    popover.innerHTML = 'Hello, World!';
    return popover;
  }
}
