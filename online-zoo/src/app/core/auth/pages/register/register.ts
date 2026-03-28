import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../../shared/components/button/button';

const confirmPasswordValidator = (groupControl: AbstractControl): ValidationErrors | null => {
  return groupControl.get('password')?.value === groupControl.get('confirmPassword')?.value
    ? null
    : { mismatch: true };
};

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FontAwesomeModule, Button],
  templateUrl: './register.html',
  styleUrl: '../login/login.scss',
})
export class Register {
  formBuilder = inject(FormBuilder);
  faCircleExclamation = faCircleExclamation;
  loginNameValidationRuLes = [
    Validators.required,
    Validators.pattern(/^[A-Za-z]/),
    Validators.minLength(3),
  ];

  registerForm = this.formBuilder.group(
    {
      login: ['', this.loginNameValidationRuLes],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[!@#$%^&*(),.?":{}|<>])/),
          Validators.minLength(6),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      name: ['', this.loginNameValidationRuLes],
      email: ['', [Validators.required, Validators.email]],
    },
    { validators: confirmPasswordValidator }
  );

  get login() {
    return this.registerForm.get('login');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
