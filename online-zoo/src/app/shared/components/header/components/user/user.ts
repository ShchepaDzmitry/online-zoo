import { Component, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../button/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [FontAwesomeModule, Button, RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {
  private readonly = inject(Router);
  faUser = faUser;
  isLoggedIn = localStorage.getItem('user');
  currentUser: string = '';
  userEmail: string = '';
  userName: string = '';
  isModalShown = false;

  ngOnInit(): void {
    this.setTheUserInformation();
  }

  setTheUserInformation() {
    if (this.isLoggedIn) {
      this.currentUser = localStorage.getItem('user') ?? '';
      this.userEmail = localStorage.getItem('email') ?? '';
      this.userName = localStorage.getItem('name') ?? '';
    }
  }

  showUserInfo() {
    this.isModalShown = !this.isModalShown;
  }

  loginOrRegister() {
    this.isModalShown = !this.isModalShown;
  }
}
