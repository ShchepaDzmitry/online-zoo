import animals from "../../data/animals";
import {renderCarouselArray, moveLeft, moveRight} from "../../utils/carouselUtils";
import createYoutubePreviewCard from './createYoutubePreviewCard'
import highlightNavElements from "../../utils/headerNavHighlightsUtils";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const didYouKnowTextElement = document.getElementById('didYouKnow');
const youtubePreviewContainerElement = document.getElementById('youtubePreviewContainer');
const donationSectionHeadingElement = document.getElementById('donationSectionHeading');
const donationSectionTextElement = document.getElementById('donationSectionText');
const zoosPageHeadingElement = document.getElementById('zoosPageHeading');
const commonNameElement = document.getElementById('commonName');
const scientificNameElement = document.getElementById('scientificName');
const typeElement = document.getElementById('type');
const sizeElement = document.getElementById('size');
const dietElement = document.getElementById('diet');
const habitatElement = document.getElementById('habitat');
const rangeElement = document.getElementById('range');
const didYouKnowImgPathElement = document.getElementById('didYouKnowImgPath');
const didYouKnowDescriptionElement = document.getElementById('didYouKnowDescription');



const currentAnimal = animals.find(({id: animalId}) => animalId === id);
let currentVideoId = currentAnimal.youtubeVideoIds[0].id;

const renderMainPreview = (videoId: string) => {
    youtubePreviewContainerElement!.innerHTML = `
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

const {
    didYouKnowText,
    zoosPageHeading,
    makeDonationHeading,
    makeDonationText,
    commonName,
    scientificName,
    type,
    size,
    diet,
    habitat,
    range,
    didYouKnowImgPath,
    didYouKnowDescription
} = currentAnimal;

didYouKnowTextElement!.innerText = didYouKnowText;
zoosPageHeadingElement!.innerText = zoosPageHeading;
donationSectionHeadingElement!.innerText = makeDonationHeading;
donationSectionTextElement!.innerText = makeDonationText;
commonNameElement!.innerText = commonName;
scientificNameElement!.innerText = scientificName;
typeElement!.innerText = type;
sizeElement!.innerText = size;
dietElement!.innerText = diet;
habitatElement!.innerText = habitat;
rangeElement!.innerText = range;
didYouKnowImgPathElement!.setAttribute('src', didYouKnowImgPath);
didYouKnowImgPathElement!.setAttribute('alt', commonName);
didYouKnowDescriptionElement!.innerText = didYouKnowDescription;

// LEFT SIDE PANEL

const animalNavigationElement = document.querySelector<HTMLElement>('.animal-nav');
const panelButtonElement = document.querySelector<HTMLElement>('.panel-button');
const openedPanelIconElement = document.querySelector<HTMLElement>('.fa-angles-left');
const closedPanelIconElement = document.querySelector<HTMLElement>('.fa-angles-right');
const navItemElementList = document.querySelectorAll<HTMLElement>('.animal-nav-list-item');
let isOpened = false;

panelButtonElement?.addEventListener("click", () => {
    if (isOpened) {
        isOpened = false;
        openedPanelIconElement!.style.display = 'none';
        closedPanelIconElement!.style.display = 'inline';
        animalNavigationElement!.classList.remove('panel-opened');
        navItemElementList.forEach((element) => {
            const textElement = element.querySelector<HTMLElement>('.nav-description');
            textElement!.style.display = 'none';

            const imgWrapperElement = element.querySelector('.img-wrapper');
            imgWrapperElement!.classList.remove('img-wrapper-opened');

            const liveCamsImgElement = element.querySelector<HTMLElement>('.live-cams-img');
            liveCamsImgElement!.style.height = '60px';
            (liveCamsImgElement!.firstElementChild as HTMLElement).style.fill = '#20113d';

            const anchorElement = element.querySelector<HTMLElement>('.panel-list a');
            anchorElement!.style.width = '100%';
        });
    } else {
        isOpened = true;
        closedPanelIconElement!.style.display = 'none';
        openedPanelIconElement!.style.display = 'inline';
        animalNavigationElement!.classList.add('panel-opened');
        navItemElementList.forEach((element) => {
            const textElement = element.querySelector<HTMLElement>('.nav-description');
            textElement!.style.display = 'inline';

            const imgWrapperElement = element.querySelector('.img-wrapper');
            imgWrapperElement!.classList.add('img-wrapper-opened');

            const liveCamsImgElement = element.querySelector<HTMLElement>('.live-cams-img');
            liveCamsImgElement!.style.height = '50px';
            (liveCamsImgElement!.firstElementChild! as HTMLElement).style.fill = '#f58021';

            const anchorElement = element.querySelector<HTMLElement>('.panel-list a');
            anchorElement!.style.width = '55%';
        });
    }
})

// YOUTUBE CAROUSEL
let carouselVideos = [...currentAnimal.youtubeVideoIds];


const leftBtnYtCarouselElement = document.getElementById('youtubeCarouselLeftButton')
const rightBtnYtCarouselElement = document.getElementById('youtubeCarouselRightButton')
const ytCarouselContainer = document.querySelector('.yt-carousel');

leftBtnYtCarouselElement?.addEventListener("click", () => {
    carouselVideos = moveLeft(carouselVideos);
  renderCarouselArray(carouselVideos, ytCarouselContainer, createYoutubePreviewCard, currentVideoId);
});

rightBtnYtCarouselElement?.addEventListener("click", () => {
    carouselVideos = moveRight(carouselVideos);
    renderCarouselArray(carouselVideos, ytCarouselContainer, createYoutubePreviewCard, currentVideoId);
});

ytCarouselContainer?.addEventListener('click', (e) => {
    const container = (e.target as HTMLElement).closest('.youtube-preview-thumbnail-container');
    if (!container) return;
    const selectedImageContainer = document.querySelector('.selected-yt-preview');
    selectedImageContainer!.classList.remove('selected-yt-preview');
    container.classList.add('selected-yt-preview');
    renderMainPreview(container.id);
    currentVideoId = container.id;
});

window.onload = () => {
    renderCarouselArray(carouselVideos, ytCarouselContainer, createYoutubePreviewCard);
    const ytPreviewImageElement = document.querySelector('.youtube-preview-thumbnail-container');
    ytPreviewImageElement!.classList.add('selected-yt-preview');
    renderMainPreview(currentVideoId);
    highlightNavElements(2);
};
