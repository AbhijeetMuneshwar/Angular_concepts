import { Component } from '@angular/core';

@Component({
    selector: 'app-fundamentals',
    standalone: true,
    templateUrl: './fundamentals.component.html',
    styleUrl: './fundamentals.component.scss'
})
export class FundamentalsComponent {
    codeExample = `import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: '<h2>{{ title }}</h2>'
})
export class GreetingComponent {
  title = 'Hello Angular';
}`;

    dataBindingExample = `// interpolation
<h2>{{ title }}</h2>

// property binding
<img [src]="imageUrl" />

// event binding
<button (click)="save()">Save</button>

// two-way binding
<input [(ngModel)]="name" />`;

    directiveExample = `@Component({ template: '<p appHighlight>Highlighted</p>' })
export class DemoComponent {}`;

    pipeExample = `{{ price | currency }}
{{ text | titlecase }}`;
}
