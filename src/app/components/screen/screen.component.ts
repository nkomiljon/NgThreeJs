import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'screen',
    template: `<canvas class="webgl" id="webgl"></canvas>`,
    styles: [``],
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenComponent {}