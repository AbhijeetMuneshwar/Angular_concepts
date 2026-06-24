import { Component } from '@angular/core';

@Component({
    selector: 'app-standalone-components',
    standalone: true,
    templateUrl: './standalone-components.component.html',
    styleUrl: './standalone-components.component.scss'
})
export class StandaloneComponentsComponent {
    bootstrapExample = `bootstrapApplication(AppComponent, { providers: [] });`;
}
