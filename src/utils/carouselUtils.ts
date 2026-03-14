import { Pet } from "../pages/landing/interfaces/pet";

export const renderCarouselArray = (carouselArray: Pet[], carouselContainerElement: HTMLElement, renderFn, selectedItem?: any): void => {
    carouselContainerElement.innerHTML = carouselArray.map((carouselItem: Pet) => renderFn(carouselItem, selectedItem)).join('');
  };
  
export const moveRight = (arr: Pet[]): Pet[] => [...arr.slice(1), arr[0]];
  
export const moveLeft = (arr: Pet[]): Pet[]  => [arr[arr.length - 1], ...arr.slice(0, -1)];
  