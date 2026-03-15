import highlightNavElements from "../../utils/headerNavHighlightsUtils";
import { getData } from "../../utils/handleDataUtils";
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const animalImagesData = [
    { id: 1, imgPath: '../../assets/images/did_you_know_panda.png', videoId: 'gnEuhfyZPPQ' },
    { id: 2, imgPath: '../../assets/images/did_you_know_lemur.png', videoId: '2M1BmfHlOEI' },
    { id: 3, imgPath: '../../assets/images/did_you_know_gorilla.png', videoId: 'yfSyjwY6zSQ' },
    { id: 5, imgPath: '../../assets/images/did_you_know_eagles.png', videoId: '41eq4VzCYc4' },
];
const didYouKnowTextElement = document.getElementById('didYouKnow');
const youtubePreviewContainerElement = document.getElementById('youtubePreviewContainer');
// https://shchepadzmitry.github.io/online-zoo/
const commonNameElement = document.getElementById('commonName');
const scientificNameElement = document.getElementById('scientificName');
const typeElement = document.getElementById('type');
const sizeElement = document.getElementById('size');
const dietElement = document.getElementById('diet');
const habitatElement = document.getElementById('habitat');
const rangeElement = document.getElementById('range');
const didYouKnowImgPathElement = document.getElementById('didYouKnowImgPath');
const didYouKnowDescriptionElement = document.getElementById('didYouKnowDescription');
const renderDidYouKnowSection = (animal) => {
    const { size, commonName, description, diet, detailedDescription, habitat, scientificName, range, type, id } = animal.data;
    const additionalAnimalInfo = animalImagesData.find((animal) => animal.id === id);
    console.log(animalImagesData, additionalAnimalInfo);
    sizeElement.textContent = size;
    dietElement.textContent = diet;
    habitatElement.textContent = habitat;
    rangeElement.textContent = range;
    scientificNameElement.textContent = scientificName;
    commonNameElement.textContent = commonName;
    typeElement.textContent = type;
    didYouKnowDescriptionElement.textContent = detailedDescription;
    didYouKnowTextElement.textContent = description;
    didYouKnowImgPathElement.src = additionalAnimalInfo.imgPath;
    renderMainPreview(additionalAnimalInfo.videoId);
};
const renderMainPreview = (videoId) => {
    console.log(videoId);
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
    `;
};
// LEFT SIDE PANEL
const animalNavigationElement = document.querySelector('.animal-nav');
const panelButtonElement = document.querySelector('.panel-button');
const openedPanelIconElement = document.querySelector('.fa-angles-left');
const closedPanelIconElement = document.querySelector('.fa-angles-right');
const navItemElementList = document.querySelectorAll('.animal-nav-list-item');
let isOpened = false;
panelButtonElement?.addEventListener("click", () => {
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
    }
    else {
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
});
// YOUTUBE CAROUSEL
// let carouselVideos = [...currentAnimal.youtubeVideoIds];
const leftBtnYtCarouselElement = document.getElementById('youtubeCarouselLeftButton');
const rightBtnYtCarouselElement = document.getElementById('youtubeCarouselRightButton');
const ytCarouselContainer = document.querySelector('.yt-carousel');
leftBtnYtCarouselElement?.addEventListener("click", () => {
    //     carouselVideos = moveLeft(carouselVideos);
    //   renderCarouselArray(carouselVideos, ytCarouselContainer, createYoutubePreviewCard, currentVideoId);
});
rightBtnYtCarouselElement?.addEventListener("click", () => {
    // carouselVideos = moveRight(carouselVideos);
    // renderCarouselArray(carouselVideos, ytCarouselContainer, createYoutubePreviewCard, currentVideoId);
});
ytCarouselContainer?.addEventListener('click', (e) => {
    const container = e.target.closest('.youtube-preview-thumbnail-container');
    if (!container)
        return;
    const selectedImageContainer = document.querySelector('.selected-yt-preview');
    selectedImageContainer.classList.remove('selected-yt-preview');
    container.classList.add('selected-yt-preview');
    renderMainPreview(container.id);
    // currentVideoId = container.id;
});
window.onload = async () => {
    console.log(id);
    // renderCarouselArray(carouselVideos, ytCarouselContainer, createYoutubePreviewCard);
    // const ytPreviewImageElement = document.querySelector('.youtube-preview-thumbnail-container');
    // ytPreviewImageElement!.classList.add('selected-yt-preview');
    const animalResponse = await getAnimalData(id);
    console.log(animalResponse);
    renderDidYouKnowSection(animalResponse);
    highlightNavElements(2);
};
// async function getAnimalsCameraData() {
//     const response = await getData<AnimalCameraApiResponse>(`/cameras`);
// }
async function getAnimalData(petId) {
    const response = await getData(`/pets/${petId}`);
    return response;
}
