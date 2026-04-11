import { Component, inject, input } from '@angular/core';
import { IAnimal } from '../../animal/animal.model';
import { Button } from '../../../shared/components/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel-card',
  imports: [Button, RouterLink],
  templateUrl: './carousel-card.html',
  styleUrl: './carousel-card.scss',
})
export class CarouselCard {
  readonly animal = input.required<IAnimal>();
}
