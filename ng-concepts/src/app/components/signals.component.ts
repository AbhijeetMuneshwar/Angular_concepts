import { Component, signal, computed, effect } from '@angular/core';

@Component({
    selector: 'app-signals',
    standalone: true,
    templateUrl: './signals.component.html',
    styleUrl: './signals.component.scss'
})
export class SignalsComponent {
    count = signal(0);
    doubled = computed(() => this.count() * 2);

    signalExample = `const count = signal(0);`;
    computedExample = `const doubled = computed(() => count() * 2);`;
    effectExample = `effect(() => {
  console.log('Count changed:', count());
});`;
    signalInputExample = `@Input() count = signal(0);`;
    stateExample = `const todos = signal(['buy milk']);`;

    constructor() {
        effect(() => {
            console.log('Count changed:', this.count());
        });
    }

    increment() {
        this.count.update(value => value + 1);
    }
}
