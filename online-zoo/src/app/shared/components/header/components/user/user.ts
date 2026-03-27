import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  imports: [FontAwesomeModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  isLoggedIn = false;
  faUser = faUser;
}
