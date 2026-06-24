import { Component } from '@angular/core';

@Component({
    selector: 'app-dependency-injection',
    standalone: true,
    templateUrl: './dependency-injection.component.html',
    styleUrl: './dependency-injection.component.scss'
})
export class DependencyInjectionComponent {
    codeExample = `@Injectable({ providedIn: 'root' })
export class CounterService {
  count = 0;

  increment() {
    this.count++;
  }
}`;

    providerExample = `@Component({
  selector: 'app-demo',
  providers: [CounterService]
})
export class DemoComponent {}`;

    tokenExample = `export const API_URL = new InjectionToken<string>('API_URL');`;
}
