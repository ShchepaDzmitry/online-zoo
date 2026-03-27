import { Component } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from '../../../features/carousel/carousel';

@Component({
  selector: 'app-landing',
  imports: [Button, FontAwesomeModule, Carousel],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
}
