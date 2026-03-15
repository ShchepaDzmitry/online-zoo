import createCarouselCard from './createCarouselCard';
import payAndFeedCards from './payAndFeedCards';
import createPayAndFeedCard from './createPayAndFeedCard';
import createFeedbackCard from './createFeedbackCard';
import createFeedCard from './createFeedCard';
import animals from '../../data/animals';
import { renderCarouselArray, moveLeft, moveRight } from '../../utils/carouselUtils';
import highlightNavElements from "../../utils/headerNavHighlightsUtils";
import createDonationChip from './createDonationChip';
import { getData, getUserData } from '../../utils/handleDataUtils';
import { showLoader } from '../../utils/loaderUtils';
import { closeModalDialog } from '../../utils/closeModalUtils';
import { checkFormValidity, showErrorMessage } from '../../utils/handleFormInputUtils';
const animalCarouselElement = document.querySelector('.carousel');
const payAndFeedCardsElement = document.querySelector('.pay-and-feed__cards');
const feedbackRightPanelElement = document.querySelector('.feedback__right-panel');
const careForBottomPanelElement = document.querySelector('.care-for .bottom-panel');
const leftCarouselBtnElement = document.getElementById('carouselLeftButton');
const rightCarouselBtnElement = document.getElementById('carouselRightButton');
const leftFeedbackBtnElement = document.getElementById('feedbackLeftButton');
const rightFeedbackBtnElement = document.getElementById('feedbackRightButton');
const feedDialogElement = document.querySelector('.feed-dialog');
const handleDonationDialog = (openDialogButton, closeDialogButton, dialogContainer) => {
    openDialogButton.addEventListener('click', (e) => {
        if (e.target.closest('.button')) {
            dialogContainer.classList.add('dialog-opened');
            document.body.style.overflow = 'hidden';
            document.querySelector('.overlay').style.display = 'block';
        }
    });
    closeDialogButton.addEventListener('click', () => {
        dialogContainer.classList.remove('dialog-opened');
        document.body.style.overflow = 'auto';
        document.querySelector('.overlay').style.display = 'none';
    });
};
payAndFeedCardsElement.innerHTML = payAndFeedCards.map((card) => createPayAndFeedCard(card)).join('');
const feedCardAnimals = animals.map((animal) => ({ feedCardImgPath: animal.feedCardImgPath, feedCardDescription: animal.feedCardDescription }));
careForBottomPanelElement.innerHTML = feedCardAnimals.filter(({ feedCardDescription }) => !!feedCardDescription).map((animal) => createFeedCard(animal)).join('');
const largeImgForFeedcardElement = document.createElement('img');
largeImgForFeedcardElement.setAttribute('src', '../../assets/images/koala_feedcard.png');
largeImgForFeedcardElement.setAttribute('alt', 'Koala image');
largeImgForFeedcardElement.setAttribute('height', '660px');
largeImgForFeedcardElement.setAttribute('width', '910px');
careForBottomPanelElement.prepend(largeImgForFeedcardElement);
// FEED DONATION POP UP
const feedDonationCloseBtnElement = document.querySelector('#feedDonationCloseBtn');
const donationCointainerElement = document.querySelector('.action-container');
const donations = ['$20', '$30', '$50', '$80', '$100', 'other amount'];
donationCointainerElement.innerHTML = donations.map((donation) => createDonationChip(donation)).join('');
handleDonationDialog(careForBottomPanelElement, feedDonationCloseBtnElement, feedDialogElement);
window.onload = async () => {
    highlightNavElements(0);
    checkIfUserLogedIn(localStorage.getItem('username'));
    await getLoggedInUserInfo(isLoggedIn);
    checkTheStepNum();
};
// DONATION MODAL
const donationDialogContainer = document.querySelector('.donation-dialog__container');
const donationChipsContainer = document.querySelector('.donation-dialog__chips--container');
const donationModalBackBtnElement = document.querySelector('#backBtn');
const donationModalNextBtnElement = document.querySelector('#nextBtn');
const completeDonationModalBtnElement = document.querySelector('#completeDonationBtn');
const stepListItemElements = document.querySelectorAll('.step-list__item');
const donationDialogInfoElements = document.querySelectorAll('.donation-dialog__info');
let step = 1;
const checkTheStepNum = () => {
    if (step === 1) {
        donationModalBackBtnElement.style.opacity = '0';
    }
    else {
        donationModalBackBtnElement.style.opacity = '1';
    }
    if (step === 3) {
        completeDonationModalBtnElement.style.display = 'block';
        donationModalNextBtnElement.style.display = 'none';
    }
    else {
        completeDonationModalBtnElement.style.display = 'none';
        donationModalNextBtnElement.style.display = 'block';
    }
    stepListItemElements.forEach((element, ind, arr) => {
        if (step === ([...arr].indexOf(element) + 1)) {
            element.classList.add('active-step');
        }
        else {
            element.classList.remove('active-step');
        }
    });
    donationDialogInfoElements.forEach((element) => {
        const elementId = +element.id.slice(-1);
        if (step === elementId) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    });
};
const goToNextStep = () => {
    step += 1;
};
const goToPreviousStep = () => {
    if (step >= 1) {
        step -= 1;
    }
};
donationModalBackBtnElement?.addEventListener('click', () => {
    goToPreviousStep();
    checkTheStepNum();
});
donationModalNextBtnElement?.addEventListener('click', () => {
    goToNextStep();
    checkTheStepNum();
});
donationChipsContainer.innerHTML = donations.slice(0, -1).map((amount) => createDonationChip(amount)).join('');
let donationFormData = {
    step_1: {
        donationAmount: '',
        selectedPet: '',
        isMonthlyGift: false,
    },
    step_2: {
        name: '',
        email: '',
    },
    step_3: {
        cardNumber: '',
        cvvNumber: '',
        expirationDate: '',
        isCardSaved: false,
    }
};
const validateAmount = (value) => {
    return !!Number(value);
};
const validateSelectedPet = (value) => {
    return !!value;
};
const donationFormInputsDataStep1 = [
    {
        fieldName: 'otherAmount',
        isValid: false,
        validate: (value) => validateAmount(value),
        errorMsg: 'Please enter a valid amount',
    },
    {
        fieldName: 'selectedPet',
        isValid: false,
        validate: (value) => validateSelectedPet(value),
        errorMsg: 'Please select a pet',
    },
];
const donationChipsElements = document.querySelectorAll('.donation-dialog__chips--container button');
const donationChipsInputElement = document.querySelector('#donationsAmount');
const otherAmountInputElement = document.querySelector('#otherAmount');
const step1FormElement = document.querySelector('#step1Form');
const step1NextBtnElement = document.querySelector('#nextBtnStep1');
const errorContainerElement = document.querySelector('.error-container.subheader');
const selectedPetsElements = document.querySelectorAll('.select-pet__list--item');
const selectedPetsInputElement = document.querySelector('#selectedPet');
// STEP 1
donationFormInputsDataStep1.forEach(({ fieldName, validate, isValid, errorMsg }) => {
    const inputElement = document.querySelector(`#${fieldName}`);
    if (inputElement) {
        donationChipsElements.forEach((chipElement) => {
            chipElement.addEventListener('click', () => {
                donationChipsElements.forEach((chip) => chip.classList.remove('active'));
                chipElement.classList.add('active');
                const value = chipElement.id;
                otherAmountInputElement.value = '';
                donationChipsInputElement.value = value;
                donationFormData.step_1.donationAmount = value;
            });
        });
        otherAmountInputElement.addEventListener("blur", (e) => {
            donationChipsElements.forEach((chipElement) => chipElement.classList.remove("active"));
            const { value } = e.target;
            isValid = validate(value);
            donationChipsInputElement.value = otherAmountInputElement.value;
            donationFormData.step_1.donationAmount = otherAmountInputElement.value;
            showErrorMessage(isValid, errorMsg, inputElement, donationFormInputsDataStep1);
            const formInputsValidity = donationFormInputsDataStep1.map(elem => elem.isValid);
            checkFormValidity(formInputsValidity, step1NextBtnElement);
            errorContainerElement.textContent = '';
        });
        selectedPetsElements.forEach((pet) => {
            pet.addEventListener('click', () => {
                const value = pet.id;
                if (fieldName === 'selectedPet') {
                    isValid = validateSelectedPet(value);
                    console.log(inputElement);
                    donationFormData.step_1.selectedPet = value;
                    selectedPetsInputElement.value = value;
                    showErrorMessage(isValid, errorMsg, inputElement, donationFormInputsDataStep1);
                    const formInputsValidity = donationFormInputsDataStep1.map(elem => elem.isValid);
                    checkFormValidity(formInputsValidity, step1NextBtnElement);
                    console.log(donationFormInputsDataStep1);
                    errorContainerElement.textContent = '';
                }
            });
        });
        step1FormElement?.addEventListener('submit', (e) => {
            e.preventDefault();
            goToNextStep();
            checkTheStepNum();
        });
    }
});
// SELECT FUNCTIONALITY
const selectPetTriggerElement = document.querySelector('#petsDropdownBtn');
const selectPetListElement = document.querySelector('.select-pet__list');
const selectMonthTriggerElement = document.querySelector('#monthDropdownBtn');
const selectMonthListElement = document.querySelector('.select-month__list');
const selectYearTriggerElement = document.querySelector('#yearDropdownBtn');
const selectYearListElement = document.querySelector('.select-year__list');
const donationsSectionBtnElement = document.querySelector('#donationsSectionBtn');
const makeYourDonationCloseBtnElement = document.querySelector('#makeYourDonationCloseBtn');
const toggleSelectList = (triggerElement, listElement, elementId) => {
    triggerElement.addEventListener('click', (e) => {
        if (listElement && e.target.closest(`${elementId}`)) {
            listElement?.classList.toggle('open');
        }
    });
};
selectPetTriggerElement?.addEventListener('click', (e) => {
    if (selectPetListElement && e.target.closest('#petsDropdownBtn')) {
        selectPetListElement?.classList.toggle('open');
    }
});
toggleSelectList(selectMonthTriggerElement, selectMonthListElement, '#monthDropdownBtn');
toggleSelectList(selectYearTriggerElement, selectYearListElement, '#yearDropdownBtn');
handleDonationDialog(donationsSectionBtnElement, makeYourDonationCloseBtnElement, donationDialogContainer);
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
// MEET SOME OUR PETS DATA FETCHING
const petImagePaths = [
    "../../assets/images/panda_lucas.png",
    "../../assets/images/lemur_andy.png",
    "../../assets/images/gorilla_glen.png",
    "../../assets/images/crocodile_mike.png",
    "../../assets/images/did_you_know_eagles.png",
    "../../assets/images/koala_liz.png",
    "../../assets/images/lion_shake.png",
    "../../assets/images/tiger_senja.png",
];
let carouselAnimals;
const hadleErrorResponse = (error, containerElement) => {
    const errorMessage = 'Something went wrong. Please, refresh the page';
    containerElement.innerHTML =
        `<p class="subheader error-message">
      <span>${error.message}.</span>
      <br>
      <span>${errorMessage}</span>
      </p>
    `;
};
async function renderCarouselCards() {
    showLoader(animalCarouselElement);
    try {
        const response = await getData('pets');
        const requiredPets = response.data.slice(0, 8).map((pet, ind) => pet = { ...pet, img: petImagePaths[ind] });
        carouselAnimals = [...requiredPets];
        renderCarouselArray(requiredPets, animalCarouselElement, createCarouselCard);
    }
    catch (error) {
        hadleErrorResponse(error, animalCarouselElement);
    }
}
leftCarouselBtnElement.addEventListener("click", () => {
    carouselAnimals = moveLeft(carouselAnimals);
    renderCarouselArray(carouselAnimals, animalCarouselElement, createCarouselCard);
});
rightCarouselBtnElement.addEventListener("click", () => {
    carouselAnimals = moveRight(carouselAnimals);
    renderCarouselArray(carouselAnimals, animalCarouselElement, createCarouselCard);
});
// FEEDBACK CAROUSEL
let carouselFeedbacks;
async function renderFeedbackCards() {
    showLoader(feedbackRightPanelElement);
    try {
        const response = await getData('feedback');
        carouselFeedbacks = [...response.data];
        renderCarouselArray(carouselFeedbacks, feedbackRightPanelElement, createFeedbackCard);
    }
    catch (error) {
        hadleErrorResponse(error, feedbackRightPanelElement);
    }
}
async function initRender() {
    await renderCarouselCards();
    await renderFeedbackCards();
}
initRender();
leftFeedbackBtnElement.addEventListener("click", () => {
    carouselFeedbacks = moveLeft(carouselFeedbacks);
    renderCarouselArray(carouselFeedbacks, feedbackRightPanelElement, createFeedbackCard);
});
rightFeedbackBtnElement.addEventListener("click", () => {
    carouselFeedbacks = moveRight(carouselFeedbacks);
    renderCarouselArray(carouselFeedbacks, feedbackRightPanelElement, createFeedbackCard);
});
