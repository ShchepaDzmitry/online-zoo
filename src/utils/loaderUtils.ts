export const showLoader = (container: HTMLElement) => {
    const loaderElement = document.createElement('div');
    loaderElement.classList.add('loader');
    loaderElement.style.display = 'block';
    container.appendChild(loaderElement);
};

export const hideLoader = () => {
    document.querySelector<HTMLElement>('.loader')!.style.display = 'none';
}