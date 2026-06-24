import { Component } from '@angular/core';

@Component({
    selector: 'app-performance-optimization',
    standalone: true,
    templateUrl: './performance-optimization.component.html',
    styleUrl: './performance-optimization.component.scss'
})
export class PerformanceOptimizationComponent {
    lazyLoadingExample = `{
  path: 'admin',
  loadChildren: () => import('./admin/admin.routes').then(m => m.routes)
}`;

    codeSplittingExample = `// Angular CLI creates separate chunks for lazy-loaded routes`;

    treeShakingExample = `import { add } from './math';
console.log(add(2, 3));`;

    onPushExample = `@Component({
  selector: 'app-card',
  template: '{{ title }}',
  changeDetection: ChangeDetectionStrategy.OnPush
})`;

    signalsExample = `const count = signal(0);`;

    trackByExample = `@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
}`;

    virtualScrollingExample = `@angular/cdk/scrolling`;

    bundleOptimizationExample = `"buildOptimizer": true,
"optimization": true`;

    ssrExample = `export const config = {
  providers: [provideClientHydration()]
};`;

    hydrationExample = `provideClientHydration()`;
}
