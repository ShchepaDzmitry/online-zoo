import { Injectable, signal, inject, DestroyRef, Signal } from '@angular/core';
import { Api } from '../../../core/api/api';
import { IAnimal, IAnimaldApiResponse } from '../animal.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private api = inject(Api);
  private destroyRef = inject(DestroyRef);

  private _animals = signal<IAnimal[]>([]);
  private _loading = signal(false);
  private _error = signal<string | null>(null);

  readonly animals: Signal<IAnimal[]> = this._animals.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  getAnimals() {
    this._loading.set(true);

    this.api
      .get<IAnimaldApiResponse>('pets')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          console.log(response);
          this._animals.set(response.data || []);
          this._loading.set(false);
        },
        error: (error) => {
          this._error.set(error.message);
          this._loading.set(false);
        },
      });
  }
}
