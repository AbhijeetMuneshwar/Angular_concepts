import { Component } from '@angular/core';

@Component({
    selector: 'app-forms',
    standalone: true,
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.scss'
})
export class FormsComponent {
    codeExample = `import { FormGroup, FormControl, Validators } from '@angular/forms';

const form = new FormGroup({
  email: new FormControl('', Validators.email),
  password: new FormControl('', Validators.required)
});`;

    templateDrivenExample = `<input [(ngModel)]="name" name="name" required />`;

    formArrayExample = `const skills = new FormArray([new FormControl('Angular')]);`;

    customValidatorExample = `export function ageValidator(control: AbstractControl) {
  return control.value >= 18 ? null : { underAge: true };
}`;

    asyncValidatorExample = `export function uniqueUserName(control: AbstractControl) {
  return timer(500).pipe(
    switchMap(() => of(control.value === 'admin' ? { taken: true } : null))
  );
}`;
}
