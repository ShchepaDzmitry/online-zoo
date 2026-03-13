import { postData } from "../../utils/handleDataUtils";
import { RegistrationFormData } from "./interfaces/registrationFormData";
import { RegistrationFormInput } from "./interfaces/registrationFormInput";

// const loginInputElement = document.getElementById('login');
// const passwordInputElement = document.getElementById('password');
// const confirmPasswordInputElement = document.getElementById('confirmPassword');
// const nameInputElement = document.getElementById('name');
// const emailInputElement = document.getElementById('email');
const signUpBtnElement = document.getElementById('signUp') as HTMLButtonElement;
const authFormContainer = document.querySelector<HTMLFormElement>('.authorization-form');


const registrationFormInputsData: RegistrationFormInput[] = [
    {
        fieldName: 'login',
        isValid: false,
        validate: (value): boolean => validateLogin(value),
        errorMsg: 'Please enter a valid login',
    },
    {
        fieldName: 'password',
        isValid: false,
        validate: (value): boolean => validatePassword(value),
        errorMsg: 'Please enter a valid password',
    },
    {
        fieldName: 'confirmPassword',
        isValid: false,
        validate: (value): boolean => validatePasswordConfirmation(value),
        errorMsg: 'Your passwords do not match',
    },
    {
        fieldName: 'name',
        isValid: false,
        validate: (value): boolean => validateName(value),
        errorMsg: 'Please enter a valid name',
    },
    {
        fieldName: 'email',
        isValid: false,
        validate: (value): boolean => validateEmail(value),
        errorMsg: 'Please enter a valid email',
    },
];

let formData: RegistrationFormData = {
    login: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
};

registrationFormInputsData.forEach(({fieldName, validate, errorMsg, isValid}) => {
    const inputElement = document.getElementById(`${fieldName}`);

    if (inputElement) {
        inputElement.addEventListener('blur', (e: Event) => {
            const {value} = e.target as HTMLInputElement;

            isValid = validate(value);

            formData = {...formData, [fieldName]: value}

            showErrorMessage(isValid, errorMsg, inputElement);

            const formInputsValidity = registrationFormInputsData.map(elem => elem.isValid);
            checkFormValidity(formInputsValidity);
        });

        inputElement.addEventListener('focus', () => {
            clearErrorMessage(inputElement);
        });
    }
});

const validateLogin = (value: string): boolean => {
    return value.length >= 3 && /^[A-Za-z]/.test(value);
};

const validatePassword = (value: string): boolean => {
    return value.length >= 6 && /^[A-Za-z]/.test(value);
};

const validatePasswordConfirmation = (value: string): boolean => {
    return value === formData.password;
};

const validateName = (value: string): boolean => {
    return value.length >= 3 && /^[A-Za-z]/.test(value);
};

const validateEmail = (value: string): boolean => {
    return value.length >= 3 && /^[A-Za-z]/.test(value);
};

const showErrorMessage = (isValid: boolean, errorMsg: string, inputFieldElem: HTMLElement): void => {
    const errorMessageElement = inputFieldElem.nextElementSibling;

    if (!isValid && errorMessageElement) {
        errorMessageElement.textContent = errorMsg;
        inputFieldElem.classList.add('error')
        registrationFormInputsData.find((form) => form.fieldName === inputFieldElem.id)!.isValid = false;
    } else {
        errorMessageElement!.textContent = '';
        inputFieldElem.classList.remove('error')
        registrationFormInputsData.find((form) => form.fieldName === inputFieldElem.id)!.isValid = true;
    }
};

const clearErrorMessage = (inputFieldElem: HTMLElement): void => {
    const errorMessageElement = inputFieldElem.nextElementSibling;

    if (errorMessageElement!.textContent) {
        errorMessageElement!.textContent = '';
        inputFieldElem.classList.remove('error')
    }
}

const checkFormValidity = (arr: boolean[]) => {
    if (!arr.includes(false)) {
        signUpBtnElement.disabled = false;
    } else {
        signUpBtnElement.disabled = true;
    }
}
   

signUpBtnElement?.addEventListener('click', async (e) => {
    e.preventDefault();
    await postData(formData, 'auth/register')
    // window.location.href = '../landing/index.html';
    console.log(formData)
});


// authFormContainer?.addEventListener('submit', (e) => {
//     e.preventDefault();
// })