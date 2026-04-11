import { Injectable, inject } from '@angular/core';
import { Api } from '../../../core/api/api';

import { IFeedBackApiResponse } from '../feedback-card/feedback-card.model';

@Injectable({
  providedIn: 'root',
})
export class Feedback {
  private api = inject(Api);
  getCards() {
    return this.api.get<IFeedBackApiResponse>('feedback');
  }
}
