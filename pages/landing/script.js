import createCarouselCard from './createCarouselCard.js';
import payAndFeedCards from './payAndFeedCards.js';
import createPayAndFeedCard from './createPayAndFeedCard.js';
import feedbackCards from './feedbackCards.js';
import createFeedbackCard from './createFeedbackCard.js';
import createFeedCard from './createFeedCard.js';
import animals from '../../data/animals.js';
import {renderCarouselArray, moveLeft, moveRight} from '../../utils/carouselUtils.js'
import highlightNavElements from "../../utils/headerNavHighlightsUtils.js";
import createDonationChip from './createDonationChip.js'

const animalCarouselElement = document.querySelector('.carousel');
const payAndFeedCardsElement = document.querySelector('.pay-and-feed__cards');
const feedbackRightPanelElement = document.querySelector('.feedback__right-panel');
const careForBottomPanelElement = document.querySelector('.care-for .bottom-panel');
const leftCarouselBtnElement = document.getElementById('carouselLeftButton');
const rightCarouselBtnElement = document.getElementById('carouselRightButton');
const leftFeedbackBtnElement = document.getElementById('feedbackLeftButton');
const rightFeedbackBtnElement = document.getElementById('feedbackRightButton');
const feedDialogElement = document.querySelector('.feed-dialog');


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


// FEED DONATION POP UP
const closeBtnElement = document.querySelector('.close-button');
const donationCointainerElement = document.querySelector('.action-container');
const donations = ['$20', '$30', '$50', '$80', '$100', 'other amount'];

donationCointainerElement.innerHTML = donations.map((donation) => createDonationChip(donation)).join('');

careForBottomPanelElement.addEventListener('click', (e) => {
  if (e.target.closest('.button')) {
    feedDialogElement.classList.add('feed-dialog-opened');
    document.body.style.overflow = 'hidden';
    document.querySelector('.overlay').style.display = 'block';
  }
})

closeBtnElement.addEventListener('click', () =>  {
  feedDialogElement.classList.remove('feed-dialog-opened');
  document.body.style.overflow = 'auto';
  document.querySelector('.overlay').style.display = 'none';
});

window.onload = () => {
  renderCarouselArray(animals, animalCarouselElement, createCarouselCard);
  renderCarouselArray(feedbackCards, feedbackRightPanelElement, createFeedbackCard);
  highlightNavElements(0);
};