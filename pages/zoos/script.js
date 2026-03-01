import animals from "../../data/animals.js";
import {renderCarouselArray, moveLeft, moveRight} from "../../utils/carouselUtils.js";
import createYoutubePreviewCard from '../zoos/createYoutubePreviewCard.js'

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const didYouKnowTextElement = document.getElementById('didYouKnow');
const youtubePreviewContainerElement = document.getElementById('youtubePreviewContainer');
const zoosPageHeadingElement = document.getElementById('zoosPageHeading');
const currentAnimal = animals.find(({id: animalId}) => animalId === id);
let currentVideoId = currentAnimal.youtubeVideoIds[0].id;

const renderMainPreview = (videoId) => {
    youtubePreviewContainerElement.innerHTML = `
    <iframe 
        width="560"
        height="315"
        src="https://www.youtube.com/embed/${videoId}?si=jb_cw1zS6xHcHViX"
        title="YouTube video player"
        frameborder="0" 
        allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share"
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
    </iframe>
    `
};

didYouKnowTextElement.innerText = currentAnimal.didYouKnowText;
zoosPageHeadingElement.innerText = currentAnimal.zoosPageHeading;

// HIGLIGHTING HEADER NAVIGATION

const navItemsElement = document.querySelectorAll('.nav-item a');
const thirdNavItemElement = navItemsElement[2];

thirdNavItemElement.classList.add('active');

navItemsElement.forEach(item => {
  item.addEventListener('mouseenter', () => {
    thirdNavItemElement.classList.remove('active');
  });

  item.addEventListener('mouseleave', () => {
    thirdNavItemElement.classList.add('active');
  });
});


// LEFT SIDE PANEL

const animalNavigationElement = document.querySelector('.animal-nav');
const panelButtonElement = document.querySelector('.panel-button');
const openedPanelIconElement = document.querySelector('.fa-angles-left');
const closedPanelIconElement = document.querySelector('.fa-angles-right');
const navItemElementList = document.querySelectorAll('.animal-nav-list-item');
let isOpened = false;

panelButtonElement.addEventListener("click", () => {
    if (isOpened) {
        isOpened = false;
        openedPanelIconElement.style.display = 'none';
        closedPanelIconElement.style.display = 'inline';
        animalNavigationElement.classList.remove('panel-opened');
        navItemElementList.forEach((element) => {
            const textElement = element.querySelector('.nav-description');
            textElement.style.display = 'none';

            const imgWrapperElement = element.querySelector('.img-wrapper');
            imgWrapperElement.classList.remove('img-wrapper-opened');

            const liveCamsImgElement = element.querySelector('.live-cams-img');
            liveCamsImgElement.style.height = '60px';
            liveCamsImgElement.firstElementChild.style.fill = '#20113d';

            const anchorElement = element.querySelector('.panel-list a');
            anchorElement.style.width = '100%';
        });
    } else {
        isOpened = true;
        closedPanelIconElement.style.display = 'none';
        openedPanelIconElement.style.display = 'inline';
        animalNavigationElement.classList.add('panel-opened');
        navItemElementList.forEach((element) => {
            const textElement = element.querySelector('.nav-description');
            textElement.style.display = 'inline';

            const imgWrapperElement = element.querySelector('.img-wrapper');
            imgWrapperElement.classList.add('img-wrapper-opened');

            const liveCamsImgElement = element.querySelector('.live-cams-img');
            liveCamsImgElement.style.height = '50px';
            liveCamsImgElement.firstElementChild.style.fill = '#f58021';

            const anchorElement = element.querySelector('.panel-list a');
            anchorElement.style.width = '55%';
        });
    }
})

// YOUTUBE CAROUSEL
let carouselVideos = [...currentAnimal.youtubeVideoIds];


const leftBtnYtCarouselElement = document.getElementById('youtubeCarouselLeftButton')
const rightBtnYtCarouselElement = document.getElementById('youtubeCarouselRightButton')
const ytCarouselContainer = document.querySelector('.yt-carousel');

leftBtnYtCarouselElement.addEventListener("click", () => {
    carouselVideos = moveLeft(carouselVideos);
  renderCarouselArray(carouselVideos, ytCarouselContainer, createYoutubePreviewCard, currentVideoId);
});

rightBtnYtCarouselElement.addEventListener("click", () => {
    carouselVideos = moveRight(carouselVideos);
    renderCarouselArray(carouselVideos, ytCarouselContainer, createYoutubePreviewCard, currentVideoId);
});


window.onload = () => {
    renderCarouselArray(carouselVideos, ytCarouselContainer, createYoutubePreviewCard);
    const ytPreviewImageElement = document.querySelector('.youtube-preview-thumbnail-container');
    ytPreviewImageElement.classList.add('selected-yt-preview');
    renderMainPreview(currentVideoId);
};

ytCarouselContainer.addEventListener('click', (e) => {
    const container = e.target.closest('.youtube-preview-thumbnail-container');
    if (!container) return;
    const selectedImageContainer = document.querySelector('.selected-yt-preview');
    selectedImageContainer.classList.remove('selected-yt-preview');
    container.classList.add('selected-yt-preview');
    renderMainPreview(container.id);
    currentVideoId = container.id;
});


