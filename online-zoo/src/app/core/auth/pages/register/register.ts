import { Component, DestroyRef, inject, signal } from '@angular/core';
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
import { Router } from '@angular/router';
import { Auth } from '../../auth';
import { IRegistrationForm } from '../../auth.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { Validation } from '../../directives/validation';

const confirmPasswordValidator = (groupControl: AbstractControl): ValidationErrors | null => {
  return groupControl.get('password')?.value === groupControl.get('confirmPassword')?.value
    ? null
    : { mismatch: true };
};

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FontAwesomeModule, Button, Validation],
  templateUrl: './register.html',
  styleUrl: '../login/login.scss',
})
export class Register {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(Auth);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  faCircleExclamation = faCircleExclamation;
  readonly error = this.authService.error;
  readonly loading = this.authService.loading;

  loginNameValidationRuLes = [
    Validators.required,
    Validators.pattern(/^[A-Za-z+$]/),
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
    { validators: confirmPasswordValidator },
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
    if (this.registerForm.valid) {
      this.authService
        .register(this.registerForm.getRawValue() as IRegistrationForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: () => {
            this.router.navigate(['/home']);
          },
          error: () => {},
        });
    }
  }
}
