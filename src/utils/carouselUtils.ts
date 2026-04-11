import { Feedback } from "../pages/landing/interfaces/feedback";
import { Pet } from "../pages/landing/interfaces/pet";

export type CarouselItem = Pet | Feedback;

export const renderCarouselArray = <T extends CarouselItem>(carouselArray: Array<T>, carouselContainerElement: HTMLElement, renderFn: (item: T, selectedItem?: unknown) => string, selectedItem?: unknown): void => {
    carouselContainerElement.innerHTML = carouselArray.map((carouselItem: (T)) => renderFn(carouselItem, selectedItem)).join('');
};
  
export const moveRight = <T extends CarouselItem>(arr: Array<T>): (Array<T>) => [...arr.slice(1), arr[0]];
  
export const moveLeft = <T extends CarouselItem>(arr: Array<T>): Array<T>  => [arr[arr.length - 1], ...arr.slice(0, -1)];
