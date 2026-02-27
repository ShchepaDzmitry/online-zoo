import carouselCards from './carouselCards.js';
import createCarouselCard from './createCarouselCard.js';
import payAndFeedCards from './payAndFeedCards.js';
import createPayAndFeedCard from './createPayAndFeedCard.js';
import feedbackCards from './feedbackCards.js';
import createFeedbackCard from './createFeedbackCard.js';
import feedCards from './feedCards.js';
import createFeedCard from './createFeedCard.js';

const carouselElement = document.querySelector('.carousel');
const payAndFeedCardsElement = document.querySelector('.pay-and-feed__cards');
const feedbackRightPanelElement = document.querySelector('.feedback__right-panel');
const careForBottomPanelElement = document.querySelector('.care-for .bottom-panel')

carouselElement.innerHTML = carouselCards.map((card) => createCarouselCard(card)).join('');
payAndFeedCardsElement.innerHTML = payAndFeedCards.map((card) => createPayAndFeedCard(card)).join('');
feedbackRightPanelElement.innerHTML = feedbackCards.map((feedback) => createFeedbackCard(feedback)).join('');
careForBottomPanelElement.innerHTML = feedCards.map((feedcard) => createFeedCard(feedcard)).join('');

const largeImgForFeedcardElement = document.createElement('img');
largeImgForFeedcardElement.setAttribute('src', '../../assets/images/koala_feedcard.png');
largeImgForFeedcardElement.setAttribute('alt', 'Koala image');
largeImgForFeedcardElement.setAttribute('height', '660px')
largeImgForFeedcardElement.setAttribute('width', '910px')
careForBottomPanelElement.prepend(largeImgForFeedcardElement);
