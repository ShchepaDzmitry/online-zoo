export const renderCarouselArray = (carouselArray, carouselContainerElement, renderFn, selectedItem) => {
    carouselContainerElement.innerHTML = carouselArray.map((carouselItem) => renderFn(carouselItem, selectedItem)).join('');
};
export const moveRight = (arr) => [...arr.slice(1), arr[0]];
export const moveLeft = (arr) => [arr[arr.length - 1], ...arr.slice(0, -1)];
