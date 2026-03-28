import { Component, input } from '@angular/core';
import { IAnimalFeedCard } from './feedcard.model';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-feedcard',
  imports: [Button],
  templateUrl: './feedcard.html',
  styleUrl: './feedcard.scss',
})
export class Feedcard {
  feedCard = input.required<IAnimalFeedCard>();
}
