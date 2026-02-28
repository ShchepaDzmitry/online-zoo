import createCarouselCard from './createCarouselCard.js';
import payAndFeedCards from './payAndFeedCards.js';
import createPayAndFeedCard from './createPayAndFeedCard.js';
import feedbackCards from './feedbackCards.js';
import createFeedbackCard from './createFeedbackCard.js';
import createFeedCard from './createFeedCard.js';
import animals from '../../data/animals.js';

const animalCarouselElement = document.querySelector('.carousel');
const payAndFeedCardsElement = document.querySelector('.pay-and-feed__cards');
const feedbackRightPanelElement = document.querySelector('.feedback__right-panel');
const careForBottomPanelElement = document.querySelector('.care-for .bottom-panel');
const leftCarouselBtnElement = document.getElementById('carouselLeftButton');
const rightCarouselBtnElement = document.getElementById('carouselRightButton');
const leftFeedbackBtnElement = document.getElementById('feedbackLeftButton');
const rightFeedbackBtnElement = document.getElementById('feedbackRightButton');
const navItemsElement = document.querySelectorAll('.nav-item a');
const firstNavItemElement = navItemsElement[0];

const renderCarouselArray = (carouselArray, carouselContainerElement, renderFn) => {
  carouselContainerElement.innerHTML = carouselArray.map((animal) => renderFn(animal)).join('');
};

const moveRight = (arr) => [...arr.slice(1), arr[0]];

const moveLeft = (arr)  => [arr[arr.length - 1], ...arr.slice(0, -1)];

// ANIMAL CAROUSEL

let carouselAnimals = [...animals];
let carouselFeedbacks = [...feedbackCards];

leftCarouselBtnElement.addEventListener("click", () => {
  carouselAnimals = moveLeft(carouselAnimals);
  renderCarouselArray(carouselAnimals, animalCarouselElement, createCarouselCard);
});

rightCarouselBtnElement.addEventListener("click", () => {
  carouselAnimals = moveRight(carouselAnimals);
  renderCarouselArray(carouselAnimals, animalCarouselElement, createCarouselCard);
});

// FEEDBACK CAROUSEL

leftFeedbackBtnElement.addEventListener("click", () => {
  carouselFeedbacks = moveLeft(carouselFeedbacks);
  renderCarouselArray(carouselFeedbacks, feedbackRightPanelElement, createFeedbackCard);

});

rightFeedbackBtnElement.addEventListener("click", () => {
  carouselFeedbacks = moveRight(carouselFeedbacks);
  renderCarouselArray(carouselFeedbacks, feedbackRightPanelElement, createFeedbackCard);
});



payAndFeedCardsElement.innerHTML = payAndFeedCards.map((card) => createPayAndFeedCard(card)).join('');
feedbackRightPanelElement.innerHTML = feedbackCards.map((feedback) => createFeedbackCard(feedback)).join('');
careForBottomPanelElement.innerHTML = animals.filter(({feedCardDescription}) => !!feedCardDescription).map((animal) => createFeedCard(animal)).join('');

const largeImgForFeedcardElement = document.createElement('img');
largeImgForFeedcardElement.setAttribute('src', '../../assets/images/koala_feedcard.png');
largeImgForFeedcardElement.setAttribute('alt', 'Koala image');
largeImgForFeedcardElement.setAttribute('height', '660px')
largeImgForFeedcardElement.setAttribute('width', '910px')
careForBottomPanelElement.prepend(largeImgForFeedcardElement);

window.onload = () => {
  renderCarouselArray(animals, animalCarouselElement, createCarouselCard);
  renderCarouselArray(feedbackCards, feedbackRightPanelElement, createFeedbackCard);
};


firstNavItemElement.classList.add('active');

navItemsElement.forEach(item => {
  item.addEventListener('mouseenter', () => {
    firstNavItemElement.classList.remove('active');
  });

  item.addEventListener('mouseleave', () => {
    firstNavItemElement.classList.add('active');
  });
});
