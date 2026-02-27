import carouselCards from './carouselCards.js';
import createCarouselCard from './createCarouselCard.js';
import payAndFeedCards from './payAndFeedCards.js';
import createPayAndFeedCard from './createPayAndFeedCard.js';
import feedbackCards from './feedbackCards.js';
import createFeedbackCard from './createFeedbackCard.js';

const carouselElement = document.querySelector('.carousel');
const payAndFeedCardsElement = document.querySelector('.pay-and-feed__cards');
const feedbackRightPanelElement = document.querySelector('.feedback__right-panel');

carouselElement.innerHTML = carouselCards.map((card) => createCarouselCard(card)).join('');
payAndFeedCardsElement.innerHTML = payAndFeedCards.map((card) => createPayAndFeedCard(card)).join('');
feedbackRightPanelElement.innerHTML = feedbackCards.map((feedback) => createFeedbackCard(feedback)).join('');
