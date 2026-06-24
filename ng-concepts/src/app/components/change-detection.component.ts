import { Component } from '@angular/core';

@Component({
    selector: 'app-change-detection',
    standalone: true,
    templateUrl: './change-detection.component.html',
    styleUrl: './change-detection.component.scss'
})
export class ChangeDetectionComponent {
    defaultExample = `// Default strategy
@Component({ template: '{{ name }}' })`;

    onPushExample = `@Component({
  selector: 'app-card',
  template: '{{ title }}',
  changeDetection: ChangeDetectionStrategy.OnPush
})`;

    cdRefExample = `this.cdr.markForCheck();
this.cdr.detectChanges();`;
}
