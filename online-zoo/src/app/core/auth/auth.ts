import { Injectable, computed, inject, signal } from '@angular/core';
import { Api } from '../api/api';
import { ILoginForm, IUser, IUserSuccessResponse } from './auth.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  api = inject(Api);

  private _currentUser = signal<IUser | null | undefined>(undefined);

  readonly currentUser = this._currentUser.asReadonly();

  readonly isLoggedIn = computed(() => !!this._currentUser);

  login(user: ILoginForm) {
    return this.api.post<IUserSuccessResponse>(user, 'auth/login').pipe(
      tap(({ data }) => {
        const {
          access_token,
          user: { name, login, email },
        } = data;
        this._currentUser.set(data.user);

        localStorage.setItem('user', login);
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);
        localStorage.setItem('token', access_token);
      })
    );
  }

  register() {}
}
