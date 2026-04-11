import { Component, input } from '@angular/core';
import { IFeedback } from './feedback-card.model';

@Component({
  selector: 'app-feedback-card',
  imports: [],
  templateUrl: './feedback-card.html',
  styleUrl: './feedback-card.scss',
})
export class FeedbackCard {
  card = input.required<IFeedback>();
}
