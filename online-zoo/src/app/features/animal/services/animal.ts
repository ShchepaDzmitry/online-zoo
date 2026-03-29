import { Injectable, inject } from '@angular/core';
import { Api } from '../../../core/api/api';
import { IAnimaldApiResponse } from '../animal.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private api = inject(Api);
  getAnimals() {
    return this.api.get<IAnimaldApiResponse>('pets');
  }
}
