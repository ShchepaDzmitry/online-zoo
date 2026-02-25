import carouselCards from './carouselCards.js';
import createCarouselCard from './createCarouselCard.js';
import payAndFeedCards from './payAndFeedCards.js';
import createPayAndFeedCard from './createPayAndFeedCard.js';

const carouselElement = document.querySelector('.carousel');
const payAndFeedCardsElement = document.querySelector('.pay-and-feed__cards');

carouselElement.innerHTML = carouselCards.map((card) => createCarouselCard(card)).join('');
payAndFeedCardsElement.innerHTML = payAndFeedCards.map((card) => createPayAndFeedCard(card)).join('');
