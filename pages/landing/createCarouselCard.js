const createCarouselCard = (animal) => {
    return  `
    <a  href="../zoos/?id=${animal.id}" class="carousel-item">
      <div class="carousel-item__wrapper">
        <div class="top-part">
          <p class="subheader name">${animal.name}</p>
          <img src="${animal.carouselCardImage}" alt="${animal.name}">
        </div>
        <div class="bottom-part">
          <p class="subheader">${animal.species}</p>
          <p>${animal.carouselCardDescription}</p>
          <button class="button blank">
            <span>view live cam</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </a>
  `
};

export default createCarouselCard;
