import { postData } from "../../utils/handleDataUtils";
import { RegistrationFormData } from "./interfaces/registrationFormData";
import { RegistrationFormInput } from "./interfaces/registrationFormInput";
import { validateLogin, validatePassword } from "../../utils/validationUtils";
import { showErrorMessage, checkFormValidity, clearErrorMessage } from "../../utils/handleFormInputUtils";

const signUpBtnElement = document.getElementById('signUp') as HTMLButtonElement;

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

            showErrorMessage(isValid, errorMsg, inputElement, registrationFormInputsData);

            const formInputsValidity = registrationFormInputsData.map(elem => elem.isValid);
            checkFormValidity(formInputsValidity, signUpBtnElement);

            errorContainerElement!.textContent = '';
        });

        inputElement.addEventListener('focus', () => {
            clearErrorMessage(inputElement);
        });
    }
});

const validatePasswordConfirmation = (value: string): boolean => {
    return value === formData.password;
};

const validateName = (value: string): boolean => {
    return value.length >= 3 && /^[A-Za-z]/.test(value);
};

const validateEmail = (value: string): boolean => {
    return value.length >= 3 && /^[A-Za-z]/.test(value);
};

const errorContainerElement = document.querySelector<HTMLElement>('.error-container.subheader');

signUpBtnElement?.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        await postData(formData, 'auth/register');

    } catch(error) {
        errorContainerElement!.textContent = (error as Error).message;

    }
});


// authFormContainer?.addEventListener('submit', (e) => {
//     e.preventDefault();
// })