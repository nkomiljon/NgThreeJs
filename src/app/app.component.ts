import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ScreenComponent } from './components/screen/screen.component';

@Component({
  selector: 'app-root',
  imports: [ScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild(ScreenComponent, { static: true, read: ElementRef })
  private screenComponent!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    const canvas = this.screenComponent.nativeElement.querySelector('canvas.webgl');
    console.log(
      this.screenComponent.nativeElement.querySelector('canvas.webgl'),
    );
  }
}
