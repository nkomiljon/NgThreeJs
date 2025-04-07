import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SettinsComponent {

}