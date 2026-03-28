import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, computed, inject } from '@angular/core';
import { CarouselCard } from './carousel-card/carousel-card';
import { AnimalService } from '../animal/services/animal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IAnimal } from '../animal/animal.model';

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

  animalsWithImages = computed(() => {
    const data = this.animalService.animals();
    return data.map((animal: IAnimal) => ({
      ...animal,
      img: '/assets/panda_lucas.png',
    }));
  });

  ngOnInit(): void {
    console.log(this.animalService.getAnimals(), this.animalService.animals());
  }
}
