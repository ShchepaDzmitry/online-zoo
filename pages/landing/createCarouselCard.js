const createCarouselCard = (animal) => {
    return  `
    <div class="carousel-item">
      <div class="top-part">
        <p class="subheader name">${animal.name}</p>
        <img src="${animal.image}" alt="${animal.name}">
      </div>
      <div class="bottom-part">
        <p class="subheader">${animal.species}</p>
        <p>${animal.description}</p>
        <button class="button blank">
          <span>view live cam</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `
};

export default createCarouselCard;
