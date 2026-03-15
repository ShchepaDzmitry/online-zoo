import { Feedback } from "../pages/landing/interfaces/feedback";
import { Pet } from "../pages/landing/interfaces/pet";

export type CarouselItem = Pet | Feedback;

export const renderCarouselArray = (carouselArray: Array<Pet | Feedback>, carouselContainerElement: HTMLElement, renderFn, selectedItem?: unknown): void => {
    carouselContainerElement.innerHTML = carouselArray.map((carouselItem: (Pet | Feedback)) => renderFn(carouselItem, selectedItem)).join('');
};
  
export const moveRight = (arr: Array<Pet | Feedback>): (Array<Pet | Feedback>) => [...arr.slice(1), arr[0]];
  
export const moveLeft = (arr: Array<Pet | Feedback>): Array<Pet | Feedback>  => [arr[arr.length - 1], ...arr.slice(0, -1)];
