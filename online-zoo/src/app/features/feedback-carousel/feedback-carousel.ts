import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { FeedbackCard } from './feedback-card/feedback-card';
import { Feedback } from './services/feedback';

@Component({
  selector: 'app-feedback-carousel',
  imports: [FeedbackCard],
  templateUrl: './feedback-carousel.html',
  styleUrl: './feedback-carousel.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeedbackCarousel implements OnInit {
  ngOnInit(): void {
    console.log(this.feedbackService.getCards());
  }
  feedbackService = inject(Feedback);
}
