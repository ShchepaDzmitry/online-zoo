import { Component, input } from '@angular/core';
import { IPayAndFeedCard } from './pay-and-feed-card.model';

@Component({
  selector: 'app-pay-and-feed-card',
  imports: [],
  templateUrl: './pay-and-feed-card.html',
  styleUrl: './pay-and-feed-card.scss',
})
export class PayAndFeedCard {
  card = input.required<IPayAndFeedCard>();
}
