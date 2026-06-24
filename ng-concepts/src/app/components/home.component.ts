import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    concepts = [
        {
            title: 'Angular Fundamentals',
            description: 'Learn the building blocks of Angular, from architecture to components and data binding.',
            route: '/fundamentals'
        },
        {
            title: 'Component Lifecycle',
            description: 'Understand the hooks that help you control behavior during a component’s lifecycle.',
            route: '/lifecycle'
        },
        {
            title: 'Dependency Injection',
            description: 'Explore services, providers, and injection tokens in a scalable Angular app.',
            route: '/dependency-injection'
        },
        {
            title: 'Routing',
            description: 'Create navigation, route parameters, guards, child routes, and lazy loading patterns.',
            route: '/routing'
        },
        {
            title: 'Forms',
            description: 'Build template-driven forms and reactive forms with validation and dynamic behavior.',
            route: '/forms'
        },
        {
            title: 'RxJS',
            description: 'Work with observables, subjects, operators, and streams in reactive Angular applications.',
            route: '/rxjs'
        },
        {
            title: 'HTTP Client',
            description: 'Connect Angular apps to APIs with GET, POST, interceptors, and error handling.',
            route: '/http-client'
        },
        {
            title: 'State Management',
            description: 'Explore services, NgRx, actions, reducers, effects, selectors, and signals-based state.',
            route: '/state-management'
        },
        {
            title: 'Change Detection',
            description: 'Understand default and OnPush strategies, ChangeDetectorRef, and manual detection control.',
            route: '/change-detection'
        },
        {
            title: 'Angular Signals',
            description: 'Learn signal(), computed(), effect(), signal inputs, and modern reactive state.',
            route: '/signals'
        },
        {
            title: 'Standalone Components',
            description: 'See how standalone components, pipes, directives, and bootstrapApplication simplify Angular apps.',
            route: '/standalone-components'
        },
        {
            title: 'Performance Optimization',
            description: 'Learn lazy loading, code splitting, tree shaking, OnPush, signals, trackBy, virtual scrolling, SSR, and hydration.',
            route: '/performance-optimization'
        },
        {
            title: 'Angular Security',
            description: 'Understand XSS prevention, sanitization, DomSanitizer, JWT security, route protection, and CSP.',
            route: '/angular-security'
        }
    ];
}
