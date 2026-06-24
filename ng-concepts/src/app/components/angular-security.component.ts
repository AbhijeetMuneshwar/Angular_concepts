import { Component } from '@angular/core';

@Component({
    selector: 'app-angular-security',
    standalone: true,
    templateUrl: './angular-security.component.html',
    styleUrl: './angular-security.component.scss'
})
export class AngularSecurityComponent {
    xssExample = `const safeHtml = this.sanitizer.bypassSecurityTrustHtml(userInput);`;

    sanitizationExample = `this.sanitizer.sanitize(SecurityContext.HTML, userInput);`;

    domSanitizerExample = `constructor(private sanitizer: DomSanitizer) {}`;

    jwtExample = `const headers = new HttpHeaders({ Authorization: 'Bearer token' });`;

    routeProtectionExample = `@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate() { return true; }
}`;

    cspExample = `Content-Security-Policy: default-src 'self'; script-src 'self'`;
}
