import { Component, inject, OnInit } from '@angular/core';

import { CanvasService } from '../three/service/canvas.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'NgThreeJs';

  private canvas = inject(CanvasService);

  ngOnInit(): void {
    this.canvas.init();
    //this.canvas.resize();
  }
}
