export const showLoader = (container) => {
    const loaderElement = document.createElement('div');
    loaderElement.classList.add('loader');
    loaderElement.style.display = 'block';
    container.appendChild(loaderElement);
};
export const hideLoader = () => {
    document.querySelector('.loader').style.display = 'none';
};
