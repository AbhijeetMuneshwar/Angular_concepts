import { Component } from '@angular/core';

@Component({
    selector: 'app-state-management',
    standalone: true,
    templateUrl: './state-management.component.html',
    styleUrl: './state-management.component.scss'
})
export class StateManagementComponent {
    stateExample = `// Services + RxJS
private count$ = new BehaviorSubject(0);`;

    ngrxExample = `// NgRx Store
const state = createReducer(initialState);`;

    signalExample = `const count = signal(0);`;
}
