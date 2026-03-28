import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../../shared/components/button/button';
import { Auth } from '../../auth';
import { ILoginForm, IUserSuccessResponse } from '../../auth.model';
import { RouterLink, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FontAwesomeModule, Button],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  formBuilder = inject(FormBuilder);
  authService = inject(Auth);
  router = inject(Router);
  faCircleExclamation = faCircleExclamation;

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required, Validators.pattern(/^[A-Za-z]/), Validators.minLength(3)]],
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
    const loginForm = {
      login: this.login!.value ?? '',
      password: this.password!.value ?? '',
    };
    if (loginForm.login && loginForm.password) {
      this.authService.login(loginForm).subscribe({
        next: () => {
          this.router.navigate(['/home']);
          console.log(this.router.navigate(['/home']));
        },
        error: (error) => {
          console.error('Критическая ошибка запроса:', error);
        },
      });
    }
  }
}
