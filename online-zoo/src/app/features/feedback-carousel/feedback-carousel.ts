import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { FeedbackCard } from './feedback-card/feedback-card';
import { Feedback } from './services/feedback';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { catchError, defer, finalize, map, of, tap } from 'rxjs';
import { IFeedback } from './feedback-card/feedback-card.model';

@Component({
  selector: 'app-feedback-carousel',
  imports: [FeedbackCard],
  templateUrl: './feedback-carousel.html',
  styleUrl: './feedback-carousel.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeedbackCarousel implements OnInit {
  private readonly feedbackService = inject(Feedback);
  private readonly destroyRef = inject(DestroyRef);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly cardsData = signal<IFeedback[]>([]);

  ngOnInit(): void {
    this.feedbackService
      .getCards()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(() => this.loading.set(true)),
        map(({ data }) => data),
        catchError(({ message }) => {
          this.loading.set(false);
          this.error.set(message);
          return of([]);
        }),
        finalize(() => this.loading.set(false)),
      )
      .subscribe((data) => this.cardsData.set(data));
  }
}
