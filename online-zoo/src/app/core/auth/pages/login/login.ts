import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../../shared/components/button/button';
import { Auth } from '../../auth';
import { ILoginForm } from '../../auth.model';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Validation } from '../../directives/validation';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FontAwesomeModule, Button, Validation],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(Auth);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  faCircleExclamation = faCircleExclamation;
  readonly error = this.authService.error;
  readonly loading = this.authService.loading;

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/), Validators.minLength(3)]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[!@#$%^&*(),.?":{}|<>])/),
        Validators.minLength(6),
      ],
    ],
  });

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.getRawValue() as ILoginForm)
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
