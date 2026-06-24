import { Component } from '@angular/core';

@Component({
    selector: 'app-http-client',
    standalone: true,
    templateUrl: './http-client.component.html',
    styleUrl: './http-client.component.scss'
})
export class HttpClientComponent {
    codeExample = `this.http.get<User[]>('/api/users').subscribe(users => {
  console.log(users);
});`;

    crudExample = `this.http.get('/api/users');
this.http.post('/api/users', user);
this.http.put('/api/users/1', user);
this.http.delete('/api/users/1');`;

    errorExample = `this.http.get('/api/users').pipe(
  catchError(error => {
    console.error(error);
    return throwError(() => new Error('Failed to load users'));
  })
);`;

    interceptorExample = `intercept(req: HttpRequest<any>, next: HttpHandler) {
  const token = localStorage.getItem('token');
  const authReq = req.clone({ setHeaders: { Authorization: \`Bearer \${token}\` } });
  return next.handle(authReq);
}`;

    jwtExample = `this.http.get('/api/profile', {
  headers: new HttpHeaders({ Authorization: 'Bearer token' })
});`;

    retryExample = `this.http.get('/api/users').pipe(retry(2));`;
}
