import createCarouselCard from './createCarouselCard';
import payAndFeedCards from './payAndFeedCards';
import createPayAndFeedCard from './createPayAndFeedCard';
import createFeedbackCard from './createFeedbackCard';
import createFeedCard from './createFeedCard';
import animals from '../../data/animals';
import {renderCarouselArray, moveLeft, moveRight} from '../../utils/carouselUtils'
import highlightNavElements from "../../utils/headerNavHighlightsUtils";
import createDonationChip from './createDonationChip';
import { getData, getUserData } from '../../utils/handleDataUtils';
import { UserProfile } from '../sign-in/types/loginTypes';
import { PetApiResponse, Pet } from './interfaces/pet';
import { showLoader } from '../../utils/loaderUtils';
import { FeedBackApiResponse, Feedback } from './interfaces/feedback';
import { closeModalDialog } from '../../utils/closeModalUtils';
import { validateLogin } from '../../utils/validationUtils';
import { checkFormValidity, showErrorMessage } from '../../utils/handleFormInputUtils';

const animalCarouselElement = document.querySelector<HTMLElement>('.carousel');
const payAndFeedCardsElement = document.querySelector<HTMLElement>('.pay-and-feed__cards');
const feedbackRightPanelElement = document.querySelector<HTMLElement>('.feedback__right-panel');
const careForBottomPanelElement = document.querySelector<HTMLElement>('.care-for .bottom-panel');
const leftCarouselBtnElement = document.getElementById('carouselLeftButton');
const rightCarouselBtnElement = document.getElementById('carouselRightButton');
const leftFeedbackBtnElement = document.getElementById('feedbackLeftButton');
const rightFeedbackBtnElement = document.getElementById('feedbackRightButton');
const feedDialogElement = document.querySelector<HTMLElement>('.feed-dialog');

const handleDonationDialog = (openDialogButton: HTMLElement, closeDialogButton: HTMLElement, dialogContainer: HTMLElement) => {
  openDialogButton.addEventListener('click', (e) => {
    if ((e.target as HTMLElement)!.closest('.button')) {
      dialogContainer!.classList.add('dialog-opened');
      document.body.style.overflow = 'hidden';
      document.querySelector<HTMLElement>('.overlay')!.style.display = 'block';
    }
  });

  closeDialogButton!.addEventListener('click', () =>  {
    dialogContainer!.classList.remove('dialog-opened');
    document.body.style.overflow = 'auto';
    document.querySelector<HTMLElement>('.overlay')!.style.display = 'none';
  });
};

payAndFeedCardsElement!.innerHTML = payAndFeedCards.map((card) => createPayAndFeedCard(card)).join('');
careForBottomPanelElement!.innerHTML = animals.filter(({feedCardDescription}) => !!feedCardDescription).map((animal) => createFeedCard(animal)).join('');


const largeImgForFeedcardElement = document.createElement('img');
largeImgForFeedcardElement.setAttribute('src', '../../assets/images/koala_feedcard.png');
largeImgForFeedcardElement.setAttribute('alt', 'Koala image');
largeImgForFeedcardElement.setAttribute('height', '660px')
largeImgForFeedcardElement.setAttribute('width', '910px')
careForBottomPanelElement!.prepend(largeImgForFeedcardElement);


// FEED DONATION POP UP
const feedDonationCloseBtnElement = document.querySelector('#feedDonationCloseBtn');
const donationCointainerElement = document.querySelector('.action-container');
const donations = ['$20', '$30', '$50', '$80', '$100', 'other amount'];

donationCointainerElement!.innerHTML = donations.map((donation) => createDonationChip(donation)).join('');

handleDonationDialog(careForBottomPanelElement as HTMLElement, feedDonationCloseBtnElement as HTMLElement, feedDialogElement as HTMLElement);

window.onload = async () => {
  highlightNavElements(0);
  checkIfUserLogedIn(localStorage.getItem('username'));
  await getLoggedInUserInfo(isLoggedIn);

  checkTheStepNum();
};

// DONATION MODAL

const donationDialogContainer = document.querySelector<HTMLElement>('.donation-dialog__container');
const donationChipsContainer = document.querySelector<HTMLElement>('.donation-dialog__chips--container');
const donationModalBackBtnElement  = document.querySelector<HTMLElement>('#backBtn');
const donationModalNextBtnElement  = document.querySelector<HTMLElement>('#nextBtn');
const completeDonationModalBtnElement  = document.querySelector<HTMLElement>('#completeDonationBtn');
const stepListItemElements = document.querySelectorAll<HTMLElement>('.step-list__item');
const donationDialogInfoElements = document.querySelectorAll<HTMLElement>('.donation-dialog__info');

let step = 1;

const checkTheStepNum = () => {
  if (step === 1) {
    donationModalBackBtnElement!.style.opacity = '0';
  } else {
    donationModalBackBtnElement!.style.opacity = '1';
  }
  if (step === 3) {
    completeDonationModalBtnElement!.style.display = 'block';
    donationModalNextBtnElement!.style.display = 'none';
  } else {
    completeDonationModalBtnElement!.style.display = 'none';
    donationModalNextBtnElement!.style.display = 'block';
  }
  stepListItemElements.forEach((element, ind, arr) => {
    if (step === ([...arr].indexOf(element) + 1)) {
      element.classList.add('active-step')
    } else {
      element.classList.remove('active-step')
    }
  });
  donationDialogInfoElements.forEach((element) => {
    const elementId = +element.id.slice(-1);
    if (step === elementId) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  })
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
})

donationChipsContainer!.innerHTML = donations.slice(0, -1).map((amount: string) => createDonationChip(amount)).join('');

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

const donationFormInputsData = [
 
  {
    fieldName: 'email',
    isValid: false,
    validate: (value: string): boolean => validateLogin(value),
    errorMsg: 'Please enter a valid email',
  },
  {
    fieldName: 'name',
    isValid: false,
    validate: (value: string): boolean => validateLogin(value),
    errorMsg: 'Please enter a valid name',
  },
  {
    fieldName: 'cardNumber',
    isValid: false,
    validate: (value: string): boolean => validateLogin(value),
    errorMsg: 'Please enter a valid card number',
  },
  {
    fieldName: 'cvvNumber',
    isValid: false,
    validate: (value: string): boolean => validateLogin(value),
    errorMsg: 'Please enter a valid CVV number',
  },
  {
    fieldName: 'expirationDate',
    isValid: false,
    validate: (value: string): boolean => validateLogin(value),
    errorMsg: 'Please enter a valid expiration date',
  },
];

const validateAmount = (value: string) => {
  return !!Number(value);
};

const validateSelectedPet = (value: string) => {
  return !!value;
}

const donationFormInputsDataStep1 = [
  {
    fieldName: 'otherAmount',
    isValid: false,
    validate: (value: string): boolean => validateAmount(value),
    errorMsg: 'Please enter a valid amount',
  },
  {
    fieldName: 'selectedPet',
    isValid: false,
    validate: (value: string): boolean => validateSelectedPet(value),
    errorMsg: 'Please select a pet',
  },
]

const donationChipsElements = document.querySelectorAll<HTMLElement>('.donation-dialog__chips--container button');
const donationChipsInputElement = document.querySelector<HTMLInputElement>('#donationsAmount');
const otherAmountInputElement = document.querySelector<HTMLInputElement>('#otherAmount');
const step1FormElement = document.querySelector<HTMLFormElement>('#step1Form');
const step1NextBtnElement = document.querySelector<HTMLButtonElement>('#nextBtnStep1');
const errorContainerElement = document.querySelector<HTMLElement>('.error-container.subheader');
const selectedPetsElements = document.querySelectorAll<HTMLElement>('.select-pet__list--item');
const selectedPetsInputElement = document.querySelector<HTMLInputElement>('#selectedPet');


// STEP 1
donationFormInputsDataStep1.forEach(({fieldName, validate, isValid, errorMsg}) => {
  const inputElement = document.querySelector<HTMLInputElement>(`#${fieldName}`);

  if (inputElement) {
    donationChipsElements.forEach((chipElement) => {
      chipElement.addEventListener('click', () => {
        donationChipsElements.forEach((chip) => chip.classList.remove('active'));
        chipElement.classList.add('active');
    
        const value = chipElement.id;
        
        otherAmountInputElement!.value = '';
        donationChipsInputElement!.value = value;
    
        donationFormData.step_1.donationAmount = value;
      })
    });
    
    otherAmountInputElement!.addEventListener("blur", (e) => {
      donationChipsElements.forEach((chipElement) => chipElement.classList.remove("active"));

      const {value} = e.target as HTMLInputElement;

      isValid = validate(value);

      donationChipsInputElement!.value = otherAmountInputElement!.value;
      donationFormData.step_1.donationAmount = otherAmountInputElement!.value;

      showErrorMessage(isValid, errorMsg, inputElement, donationFormInputsDataStep1 as any);

      const formInputsValidity = donationFormInputsDataStep1.map(elem => elem.isValid);
      checkFormValidity(formInputsValidity, step1NextBtnElement as HTMLButtonElement);

      errorContainerElement!.textContent = '';
    });

    selectedPetsElements.forEach((pet) => {
      pet.addEventListener('click', (e) => {
        const value = pet.id;

        if (fieldName === 'selectedPet') {
          isValid = validateSelectedPet(value);
          console.log(inputElement);
  
          donationFormData.step_1.selectedPet = value;
          selectedPetsInputElement!.value = value;
  
          showErrorMessage(isValid, errorMsg, inputElement, donationFormInputsDataStep1 as any);
  
          const formInputsValidity = donationFormInputsDataStep1.map(elem => elem.isValid);
          checkFormValidity(formInputsValidity, step1NextBtnElement as HTMLButtonElement);
  
          console.log(donationFormInputsDataStep1);
  
          errorContainerElement!.textContent = '';
        }
    
      })
    })
    
    step1FormElement?.addEventListener('submit', (e) => {
      e.preventDefault();
    
      goToNextStep();
      checkTheStepNum();
    })
  }
  
})



// SELECT FUNCTIONALITY

const selectPetTriggerElement = document.querySelector<HTMLElement>('#petsDropdownBtn');
const selectPetListElement = document.querySelector<HTMLElement>('.select-pet__list');
const selectMonthTriggerElement = document.querySelector<HTMLElement>('#monthDropdownBtn');
const selectMonthListElement = document.querySelector<HTMLElement>('.select-month__list');
const selectYearTriggerElement = document.querySelector<HTMLElement>('#yearDropdownBtn');
const selectYearListElement = document.querySelector<HTMLElement>('.select-year__list');
const donationsSectionBtnElement = document.querySelector<HTMLElement>('#donationsSectionBtn');
const makeYourDonationCloseBtnElement = document.querySelector<HTMLElement>('#makeYourDonationCloseBtn');


const toggleSelectList = (triggerElement: HTMLElement, listElement: HTMLElement, elementId: string) => {
    triggerElement.addEventListener('click', (e: Event) => {
      if (listElement && (e.target as HTMLElement)!.closest(`${elementId}`)) {
        listElement?.classList.toggle('open');
      }
    });
}

selectPetTriggerElement?.addEventListener('click', (e: Event) => {
  if (selectPetListElement && (e.target as HTMLElement)!.closest('#petsDropdownBtn')) {
    selectPetListElement?.classList.toggle('open');
  }
});

toggleSelectList(selectMonthTriggerElement as HTMLElement, selectMonthListElement as HTMLElement, '#monthDropdownBtn');
toggleSelectList(selectYearTriggerElement as HTMLElement, selectYearListElement as HTMLElement, '#yearDropdownBtn');

handleDonationDialog(donationsSectionBtnElement as HTMLElement, makeYourDonationCloseBtnElement as HTMLElement, donationDialogContainer as HTMLElement);

// USER LOGING SECTION

const loginUserInfoElement = document.querySelector<HTMLElement>('.login-user__info');
const loginUserModalContainer = document.querySelector<HTMLElement>('.login-user__modal');
const userLoginElement = document.querySelector<HTMLElement>('.user-login');
const userNameElement = document.querySelector<HTMLElement>('.login-user__profile-info--name');
const userEmailElement = document.querySelector<HTMLElement>('.login-user__profile-info--email');
const isLoggedInUserModalElement = document.querySelector<HTMLElement>('#isLoggedIn');
const isLoggedOutUserModalElement = document.querySelector<HTMLElement>('#isLoggedOut');
const userLoginModalCloseBtnElement = document.querySelector<HTMLButtonElement>('#userLoginModalCloseBtn');
const signOutBtnElement = document.querySelector<HTMLButtonElement>('#signOutBtn');

let isLoggedIn = false;

const checkIfUserLogedIn = (user: string | null): void => {
  if (user) {
    console.log('is loged in')
    userLoginElement!.textContent = user;
    isLoggedIn = true;
    isLoggedInUserModalElement!.style.display = 'flex';
    isLoggedOutUserModalElement!.style.display = 'none';
  } else {
    console.log('is not loged in')
    userLoginElement!.textContent = '';
    isLoggedInUserModalElement!.style.display = 'none';
    isLoggedOutUserModalElement!.style.display = 'flex';
    isLoggedIn = false;
  }
};

async function getLoggedInUserInfo(isLoggedIn: boolean) {
  if (isLoggedIn) {
    const authToken = localStorage.getItem('auth_token') as string;

    const {data: {name, email}} = await getUserData<UserProfile>(authToken, '/auth/profile');

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    userNameElement!.textContent = name;
    userEmailElement!.textContent = email;
  }
};

loginUserInfoElement?.addEventListener('click', (e)=> {
  if ((e.target as HTMLElement).closest('.login-user__info')) {
    loginUserModalContainer!.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.querySelector<HTMLElement>('.overlay')!.style.display = 'block';
  }
});

closeModalDialog(userLoginModalCloseBtnElement as HTMLElement, loginUserModalContainer as HTMLElement);

const signOutUser = () => {
  localStorage.clear();
  checkIfUserLogedIn(localStorage.getItem('username'));
}

signOutBtnElement?.addEventListener('click', () => {
  signOutUser();
  loginUserModalContainer!.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.querySelector<HTMLElement>('.overlay')!.style.display = 'none';
})

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

let carouselAnimals: Array<Pet | Feedback>;

const hadleErrorResponse = (error: unknown, containerElement: HTMLElement): void => {
  const errorMessage = 'Something went wrong. Please, refresh the page';
  containerElement!.innerHTML = 
    `<p class="subheader error-message">
      <span>${(error as Error).message}.</span>
      <br>
      <span>${errorMessage}</span>
      </p>
    `;
}

async function renderCarouselCards() {
  showLoader(animalCarouselElement as HTMLElement);

  try {
    const response: PetApiResponse = await getData<PetApiResponse>('pets');
    const requiredPets: Pet[] = response.data.slice(0, 8).map((pet, ind) => pet = {...pet, img: petImagePaths[ind]});
    carouselAnimals = [...requiredPets];
  
    renderCarouselArray(requiredPets, animalCarouselElement as HTMLElement, createCarouselCard);
  
  } catch(error) {
    hadleErrorResponse(error, animalCarouselElement as HTMLElement);
  }
}

await renderCarouselCards();

leftCarouselBtnElement!.addEventListener("click", () => {
  carouselAnimals = moveLeft(carouselAnimals);
  renderCarouselArray(carouselAnimals, animalCarouselElement as HTMLElement, createCarouselCard);
});

rightCarouselBtnElement!.addEventListener("click", () => {
  carouselAnimals = moveRight(carouselAnimals);
  renderCarouselArray(carouselAnimals, animalCarouselElement as HTMLElement, createCarouselCard);
});

// FEEDBACK CAROUSEL

let carouselFeedbacks: Array<Pet | Feedback>;

async function renderFeedbackCards() {
  showLoader(feedbackRightPanelElement as HTMLElement);
  try {
    const response: FeedBackApiResponse = await getData<FeedBackApiResponse>('feedback');
    carouselFeedbacks = [...response.data];

    renderCarouselArray(carouselFeedbacks, feedbackRightPanelElement as HTMLElement, createFeedbackCard);

  } catch (error) {
    hadleErrorResponse(error, feedbackRightPanelElement as HTMLElement);
  }
}

await renderFeedbackCards();

leftFeedbackBtnElement!.addEventListener("click", () => {
  carouselFeedbacks = moveLeft(carouselFeedbacks);
  renderCarouselArray(carouselFeedbacks, feedbackRightPanelElement as HTMLElement, createFeedbackCard);
});

rightFeedbackBtnElement!.addEventListener("click", () => {
  carouselFeedbacks = moveRight(carouselFeedbacks);
  renderCarouselArray(carouselFeedbacks, feedbackRightPanelElement as HTMLElement, createFeedbackCard);
});