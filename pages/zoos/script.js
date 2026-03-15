import highlightNavElements from "../../utils/headerNavHighlightsUtils";
import { getData, getUserData } from "../../utils/handleDataUtils";
import { hideLoader, showLoader } from "../../utils/loaderUtils";
import { closeModalDialog } from "../../utils/closeModalUtils";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const animalImagesData = [
    { id: 1, imgPath: '/online-zoo/assets/images/did_you_know_panda.png', videoId: 'gnEuhfyZPPQ' },
    { id: 2, imgPath: '/online-zoo/assets/images/did_you_know_lemur.png', videoId: '2M1BmfHlOEI' },
    { id: 3, imgPath: '/online-zoo/assets/images/did_you_know_gorilla.png', videoId: 'yfSyjwY6zSQ' },
    { id: 5, imgPath: '/online-zoo/assets/images/did_you_know_eagles.png', videoId: '41eq4VzCYc4' },
];
const didYouKnowTextElement = document.getElementById('didYouKnow');
const youtubePreviewContainerElement = document.getElementById('youtubePreviewContainer');
const commonNameElement = document.getElementById('commonName');
const scientificNameElement = document.getElementById('scientificName');
const typeElement = document.getElementById('type');
const sizeElement = document.getElementById('size');
const dietElement = document.getElementById('diet');
const habitatElement = document.getElementById('habitat');
const rangeElement = document.getElementById('range');
const didYouKnowImgPathElement = document.getElementById('didYouKnowImgPath');
const didYouKnowDescriptionElement = document.getElementById('didYouKnowDescription');
const zoosPageHeadingElement = document.querySelector('#zoosPageHeading');
let animalLongitude;
let animalLatitude;
let animalMapLabel;
const renderDidYouKnowSection = (animal) => {
    const { size, commonName, description, diet, detailedDescription, habitat, scientificName, range, type, id, latitude, longitude } = animal.data;
    const additionalAnimalInfo = animalImagesData.find((animal) => animal.id === id);
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
    animalLongitude = longitude.slice(0, -3);
    animalLatitude = latitude.slice(0, -3);
    animalMapLabel = `${commonName} location`;
    renderMainPreview(additionalAnimalInfo.videoId);
};
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
    // renderCarouselArray(carouselVideos, ytCarouselContainer, createYoutubePreviewCard);
    // const ytPreviewImageElement = document.querySelector('.youtube-preview-thumbnail-container');
    // ytPreviewImageElement!.classList.add('selected-yt-preview');
    await getAnimalsCameraData();
    const animalResponse = await getAnimalData(id);
    renderDidYouKnowSection(animalResponse);
    highlightNavElements(2);
    checkIfUserLogedIn(localStorage.getItem('username'));
    await getLoggedInUserInfo(isLoggedIn);
};
const animalDescriptionContainerElement = document.querySelector('.animal-description-wrapper');
const handleErrorMessage = (errorContainerElement, error) => {
    const deafaultErrorMessage = 'Something went wrong. Please, refresh the page';
    errorContainerElement.innerHTML = `<p class='subheader error-container'>${deafaultErrorMessage} ${error.message}</p>`;
};
async function getAnimalsCameraData() {
    try {
        showLoader(zoosPageHeadingElement);
        const response = await getData(`/cameras`);
        const pet = response.data.find((animal) => animal.petId === Number(id));
        if (pet) {
            zoosPageHeadingElement.textContent = pet.text;
        }
    }
    catch (error) {
        handleErrorMessage(zoosPageHeadingElement, error);
    }
}
async function getAnimalData(petId) {
    try {
        showLoader(animalDescriptionContainerElement);
        const response = await getData(`/pets/${petId}`);
        hideLoader();
        return response;
    }
    catch (error) {
        handleErrorMessage(animalDescriptionContainerElement, error);
    }
}
// USER LOGING SECTION
const loginUserInfoElement = document.querySelector('.login-user__info');
const loginUserModalContainer = document.querySelector('.login-user__modal');
const userLoginElement = document.querySelector('.user-login');
const userNameElement = document.querySelector('.login-user__profile-info--name');
const userEmailElement = document.querySelector('.login-user__profile-info--email');
const isLoggedInUserModalElement = document.querySelector('#isLoggedIn');
const isLoggedOutUserModalElement = document.querySelector('#isLoggedOut');
const userLoginModalCloseBtnElement = document.querySelector('#userLoginModalCloseBtn');
const signOutBtnElement = document.querySelector('#signOutBtn');
let isLoggedIn = false;
const checkIfUserLogedIn = (user) => {
    if (user) {
        console.log('is loged in');
        userLoginElement.textContent = user;
        isLoggedIn = true;
        isLoggedInUserModalElement.style.display = 'flex';
        isLoggedOutUserModalElement.style.display = 'none';
    }
    else {
        console.log('is not loged in');
        userLoginElement.textContent = '';
        isLoggedInUserModalElement.style.display = 'none';
        isLoggedOutUserModalElement.style.display = 'flex';
        isLoggedIn = false;
    }
};
async function getLoggedInUserInfo(isLoggedIn) {
    if (isLoggedIn) {
        const authToken = localStorage.getItem('auth_token');
        const { data: { name, email } } = await getUserData(authToken, '/auth/profile');
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        userNameElement.textContent = name;
        userEmailElement.textContent = email;
    }
}
;
loginUserInfoElement?.addEventListener('click', (e) => {
    if (e.target.closest('.login-user__info')) {
        loginUserModalContainer.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.querySelector('.overlay').style.display = 'block';
    }
});
closeModalDialog(userLoginModalCloseBtnElement, loginUserModalContainer);
const signOutUser = () => {
    localStorage.clear();
    checkIfUserLogedIn(localStorage.getItem('username'));
};
signOutBtnElement?.addEventListener('click', () => {
    signOutUser();
    loginUserModalContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.querySelector('.overlay').style.display = 'none';
});
// MAP MODAL WINDOW
const viewMapBtnElement = document.querySelector('#viewMapBtn');
const mapModalCloseBtnElement = document.querySelector('#mapModalCloseBtn');
const mapModalContainer = document.getElementById('mapContainer');
let map = null;
const showMap = (latitude, longitude, label) => {
    if (map) {
        map.remove();
    }
    setTimeout(() => {
        map = L.map('map').setView([+latitude, +longitude], 10);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap contributors", }).addTo(map);
        L.marker([+latitude, +longitude]).addTo(map).bindPopup(label).openPopup();
    }, 0);
};
const closeMap = () => {
    mapModalContainer.style.display = 'none';
    if (map) {
        map.remove();
        map = null;
    }
};
viewMapBtnElement?.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    document.querySelector('.overlay').style.display = 'block';
    mapModalContainer.style.display = 'block';
    showMap(animalLatitude, animalLongitude, animalMapLabel);
});
mapModalCloseBtnElement?.addEventListener('click', () => {
    closeMap();
    document.body.style.overflow = 'auto';
    document.querySelector('.overlay').style.display = 'none';
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.body.style.overflow = 'auto';
        document.querySelector('.overlay').style.display = 'none';
        closeMap();
    }
    ;
});
document.querySelector('.overlay')?.addEventListener("click", (e) => {
    if (!e.target.contains(mapModalContainer)) {
        console.log('hello');
        closeMap();
        document.body.style.overflow = 'auto';
        document.querySelector('.overlay').style.display = 'none';
    }
    ;
});
