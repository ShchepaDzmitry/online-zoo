import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../button/button';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Button],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
