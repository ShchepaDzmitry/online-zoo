import { Injectable, computed, inject, signal } from '@angular/core';
import { Api } from '../api/api';
import { ILoginForm, IRegistrationForm, IUser, IUserSuccessResponse } from './auth.model';
import { finalize, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  api = inject(Api);

  readonly debugId = Math.random().toString(36).slice(2);

  private readonly _currentUser = signal<IUser | null>(this.restoreUserFromLocalStorage());
  private readonly _token = signal<string | null>(localStorage.getItem('token'));
  private readonly _error = signal<string | null>(null);
  private readonly _loading = signal(false);

  readonly currentUser = this._currentUser.asReadonly();
  readonly error = this._error.asReadonly();
  readonly loading = this._loading.asReadonly();

  readonly isLoggedIn = computed(() => !!this._token());
  readonly currentUserLogin = computed(() => this._currentUser()?.login ?? null);
  readonly currentUserEmail = computed(() => this._currentUser()?.email ?? null);
  readonly currentUserName = computed(() => this._currentUser()?.name ?? null);

  login(user: ILoginForm) {
    this._loading.set(true);
    return this.api.post<IUserSuccessResponse>(user, 'auth/login').pipe(
      tap({
        next: ({ data }) => {
          const {
            access_token,
            user: { name, login, email },
          } = data;
          this._currentUser.set(data.user);
          this._token.set(access_token);

          this.setLocalStorage(login, email, name, access_token);
        },
        error: (error) => {
          this._error.set(error?.message ?? 'Login failed');
        },
      }),
      finalize(() => this._loading.set(false)),
    );
  }

  register(user: IRegistrationForm) {
    this._loading.set(true);
    return this.api.post<IUserSuccessResponse>(user, 'auth/register').pipe(
      tap({
        next: ({ data }) => {
          const {
            access_token,
            user: { name, login, email },
          } = data;
          this._currentUser.set(data.user);

          this.setLocalStorage(login, email, name, access_token);
        },
        error: (error) => {
          this._error.set(error?.message ?? 'Registration failed');
        },
      }),
      finalize(() => this._loading.set(false)),
    );
  }

  logout() {
    this._currentUser.set(null);
    this._token.set(null);
    localStorage.clear();
  }

  private setLocalStorage(login: string, email: string, name: string, access_token: string) {
    localStorage.setItem('user', login);
    localStorage.setItem('email', email);
    localStorage.setItem('name', name);
    localStorage.setItem('token', access_token);
  }

  private restoreUserFromLocalStorage() {
    const login = localStorage.getItem('user');
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');

    if (!login || !email || !name) return null;

    return { login, email, name };
  }
}
