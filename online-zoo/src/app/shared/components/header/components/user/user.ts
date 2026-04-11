import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../button/button';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../../../core/auth/auth';

@Component({
  selector: 'app-user',
  imports: [FontAwesomeModule, Button, RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  readonly authService = inject(Auth);

  faUser = faUser;
  readonly isLoggedIn = this.authService.isLoggedIn;
  readonly currentUserLogin = this.authService.currentUserLogin;
  readonly currentUserEmail = this.authService.currentUserEmail;
  readonly currentUserName = this.authService.currentUserName;

  isModalShown = false;

  showUserInfo() {
    this.isModalShown = !this.isModalShown;
  }

  loginOrRegister() {
    this.isModalShown = !this.isModalShown;
  }

  logout() {
    this.authService.logout();
    this.isModalShown = !this.isModalShown;
  }
}
