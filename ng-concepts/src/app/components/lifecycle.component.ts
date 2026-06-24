import { Component } from '@angular/core';

@Component({
    selector: 'app-lifecycle',
    standalone: true,
    templateUrl: './lifecycle.component.html',
    styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent {
    lifecycleExample = `import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({ selector: 'app-demo', template: '<p>{{ label }}</p>' })
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() label = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes', changes);
  }

  ngOnInit() {
    console.log('Initialized');
  }

  ngDoCheck() {
    console.log('Checked');
  }

  ngAfterContentInit() {
    console.log('Content initialized');
  }

  ngAfterContentChecked() {
    console.log('Content checked');
  }

  ngAfterViewInit() {
    console.log('View initialized');
  }

  ngAfterViewChecked() {
    console.log('View checked');
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }
}`;
}
