import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CarouselCard } from './carousel-card/carousel-card';
import { AnimalService } from '../animal/services/animal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IAnimal } from '../animal/animal.model';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { catchError, defer, finalize, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-carousel',
  imports: [CarouselCard, FontAwesomeModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Carousel implements OnInit {
  private readonly animalService = inject(AnimalService);
  private readonly destroyRef = inject(DestroyRef);
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  private readonly animalsData = signal<IAnimal[]>([]);

  ngOnInit(): void {
    this.animalService
      .getAnimals()
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
      .subscribe((data) => this.animalsData.set(data));
  }

  animalsWithImages = computed(() => {
    return this.animalsData().map((animal: IAnimal) => ({
      ...animal,
      img: '/assets/panda_lucas.png',
    }));
  });
}
