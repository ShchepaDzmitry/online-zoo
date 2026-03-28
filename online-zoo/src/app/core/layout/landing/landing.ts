import { Component } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from '../../../features/carousel/carousel';
import { IPayAndFeedCard } from '../../../features/pay-and-feed-card/pay-and-feed-card.model';
import { feedCards, payAndFeedCards } from './cards.data';
import { PayAndFeedCard } from '../../../features/pay-and-feed-card/pay-and-feed-card';
import { FeedbackCarousel } from '../../../features/feedback-carousel/feedback-carousel';
import { IAnimalFeedCard } from '../../../features/feedcard/feedcard.model';
import { Feedcard } from '../../../features/feedcard/feedcard';

@Component({
  selector: 'app-landing',
  imports: [Button, FontAwesomeModule, Carousel, PayAndFeedCard, FeedbackCarousel, Feedcard],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  payAndFeedCards: IPayAndFeedCard[] = payAndFeedCards;
  feedCards: IAnimalFeedCard[] = feedCards;
}
