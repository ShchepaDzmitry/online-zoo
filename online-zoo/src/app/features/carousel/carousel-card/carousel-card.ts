import { Component, input } from '@angular/core';
import { IAnimal } from '../../animal/animal.model';

@Component({
  selector: 'app-carousel-card',
  imports: [],
  templateUrl: './carousel-card.html',
  styleUrl: './carousel-card.scss',
})
export class CarouselCard {
  animal = input.required<IAnimal>();
}
