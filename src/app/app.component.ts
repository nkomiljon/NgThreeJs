import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

import { ScreenComponent } from './components/screen/screen.component';
import { animate, camera, renderer, scene } from './core';

@Component({
  selector: 'app-root',
  imports: [ScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @ViewChild(ScreenComponent, { static: true, read: ElementRef })
  private screenComponent!: ElementRef<HTMLElement>;
  private resizeTimeout!: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
   // clearTimeout(this.resizeTimeout);
   // this.resizeTimeout = setTimeout(() => {
      const screnEl = this.screenComponent.nativeElement;
      const canvasEl =
        screnEl.querySelector<HTMLCanvasElement>('canvas.webgl')!;

      // Update camera aspect ratio
      camera().aspect = window.innerWidth / window.innerHeight;
      camera().updateProjectionMatrix();

      // Update renderer size
      renderer(canvasEl).setSize(window.innerWidth, window.innerHeight);
      renderer(canvasEl).setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // }, 200);
  }

  ngOnInit(): void {
    const screnEl = this.screenComponent.nativeElement;
    const canvasEl = screnEl.querySelector<HTMLCanvasElement>('canvas.webgl')!;

    console.log(canvasEl);

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
    const RENREDER = renderer(canvasEl);
    RENREDER.setSize(window.innerWidth, window.innerHeight);
    RENREDER.render(SCENE, CAMERA);

    // Auto resize
    // window.addEventListener('resize', () => {
    //   // Update camera aspect ratio
    //   CAMERA.aspect = window.innerWidth / window.innerHeight;
    //   CAMERA.updateProjectionMatrix();
    //   // Update renderer size
    //   RENREDER.setSize(window.innerWidth, window.innerHeight);
    //   RENREDER.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // });

    // Animation
    (() =>
      animate(() => {
        RENREDER.render(SCENE, CAMERA);
        animate(() => RENREDER.render(SCENE, CAMERA));
      }))();
    //animate(() => RENREDER.render(SCENE, CAMERA));
  }
}
