import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../../features/animal/services/animal';
import { ICurrentAnimal } from '../../../features/animal/animal.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, finalize, map, of } from 'rxjs';
import { Button } from '../../../shared/components/button/button';

@Component({
  selector: 'app-zoos',
  imports: [Button],
  templateUrl: './zoos.html',
  styleUrl: './zoos.scss',
})
export class Zoos implements OnInit {
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private animalService = inject(AnimalService);
  private animaId = signal<string>('');

  readonly animalData = signal<ICurrentAnimal | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.loading.set(true);
    this.route.params.subscribe((params) => {
      this.animaId.set(params['id']);
    });
    this.animalService
      .getAnimal(this.animaId())
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((response) => response.data),
        catchError(({ message }) => {
          this.error.set(message);
          this.loading.set(false);
          return of({});
        }),
        finalize(() => this.loading.set(false)),
      )
      .subscribe((animal) => {
        this.animalData.set(animal as ICurrentAnimal);
        console.log(animal);
      });
  }
}
