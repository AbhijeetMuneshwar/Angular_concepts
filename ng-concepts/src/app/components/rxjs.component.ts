import { Component } from '@angular/core';

@Component({
    selector: 'app-rxjs',
    standalone: true,
    templateUrl: './rxjs.component.html',
    styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {
    codeExample = `import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const numbers$ = of(1, 2, 3).pipe(map(value => value * 2));`;

    observerExample = `const observer = {
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log('done')
};`;

    subjectExample = `import { Subject } from 'rxjs';

const subject = new Subject<number>();
subject.next(1);`;

    behaviorSubjectExample = `import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(0);
subject.next(1);`;

    replaySubjectExample = `import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject(2);
subject.next(1);
subject.next(2);`;

    asyncSubjectExample = `import { AsyncSubject } from 'rxjs';

const subject = new AsyncSubject<number>();
subject.next(1);
subject.complete();`;

    operatorsExample = `import { of, forkJoin, combineLatest, zip, Subject } from 'rxjs';
import { map, filter, tap, switchMap, mergeMap, concatMap, exhaustMap, debounceTime, distinctUntilChanged, catchError, retry, shareReplay } from 'rxjs/operators';

const numbers$ = of(1, 2, 3).pipe(
  map(value => value * 2),
  filter(value => value > 2),
  tap(value => console.log('Tapped', value))
);

const search$ = new Subject<string>();
search$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => of(term.toUpperCase()))
);

const users$ = of([{ id: 1 }, { id: 2 }]);
users$.pipe(
  mergeMap(user => of(user.id)),
  concatMap(user => of(user.id)),
  exhaustMap(() => of('done'))
);

const stream$ = of('A').pipe(
  catchError(err => of('fallback')),
  retry(2),
  shareReplay(1)
);

forkJoin([of(1), of(2)]);
combineLatest([of(1), of(2)]);
zip(of(1), of(2));`;
}
