import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { Api } from '../../../core/api/api';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IFeedBackApiResponse, IFeedback } from '../feedback-card/feedback-card.model';

@Injectable({
  providedIn: 'root',
})
export class Feedback {
  private api = inject(Api);
  private destroyRef = inject(DestroyRef);

  private _cards = signal<IFeedback[]>([]);
  private _loading = signal(false);
  private _error = signal<string | null>(null);

  readonly cards = this._cards.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  getCards() {
    this._loading.set(true);

    this.api
      .get<IFeedBackApiResponse>('feedback')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (cards) => {
          console.log(cards);
          this._cards.set(cards.data || []);
          this._loading.set(false);
        },
        error: (error) => {
          this._error.set(error.message);
          this._loading.set(false);
        },
      });
  }
}
