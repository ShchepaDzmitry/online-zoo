import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from './components/user/user';

@Component({
  selector: 'app-header',
  imports: [RouterLink, User],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
