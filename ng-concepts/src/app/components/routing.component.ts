import { Component } from '@angular/core';

@Component({
    selector: 'app-routing',
    standalone: true,
    templateUrl: './routing.component.html',
    styleUrl: './routing.component.scss'
})
export class RoutingComponent {
    routeExample = `const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', children: [
    { path: 'users', component: UsersComponent },
    { path: 'roles', component: RolesComponent }
  ]}
];`;

    queryExample = `this.router.navigate(['/products'], { queryParams: { page: 2, filter: 'new' } });`;

    lazyLoadingExample = `{
  path: 'admin',
  loadChildren: () => import('./admin/admin.routes').then(m => m.routes)
}`;

    guardExample = `@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanDeactivate<unknown>, CanLoad {
  canActivate() { return true; }
  canDeactivate() { return true; }
  canLoad() { return true; }
}`;

    preloadExample = `provideRouter(routes, withPreloading(PreloadAllModules))`;
}
