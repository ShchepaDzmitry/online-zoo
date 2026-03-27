import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, effect, inject } from '@angular/core';
import { CarouselCard } from './carousel-card/carousel-card';
import { AnimalService } from '../animal/services/animal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  imports: [CarouselCard, FontAwesomeModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Carousel implements OnInit {
  animalService = inject(AnimalService);
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  constructor() {
    // Этот код сработает АВТОМАТИЧЕСКИ, когда данные в сервисе обновятся
    effect(() => {
      console.log('Данные в сигнале обновились:', this.animalService.animals());
    });
  }

  ngOnInit(): void {
    console.log(this.animalService.getAnimals(), this.animalService.animals());
  }
}
