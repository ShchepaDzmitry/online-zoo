import { postData } from "../../utils/handleDataUtils";
import { LoginFormData } from "./interfaces/loginFormData";
import { validateLogin, validatePassword } from "../../utils/validationUtils";
import { LoginFormInput } from "./interfaces/loginFormInputs";
import { showErrorMessage, checkFormValidity, clearErrorMessage } from "../../utils/handleFormInputUtils";
import { SuccessLoginResponse } from "./types/loginTypes";

const signInBtnElement = document.querySelector<HTMLButtonElement>('#signInBtn');

let loginFormData: LoginFormData = {
    login: '',
    password: '',
};

const loginFormInputsData: LoginFormInput[] = [
    {
        fieldName: 'login',
        isValid: false,
        validate: (value: string): boolean => validateLogin(value),
        errorMsg: 'Please enter a valid login',
    },
    {
        fieldName: 'password',
        isValid: false,
        validate: (value: string): boolean => validatePassword(value),
        errorMsg: 'Please enter a valid password',
    },
];

loginFormInputsData.forEach(({fieldName, validate, isValid, errorMsg}) => {
    const inputElement = document.getElementById(`${fieldName}`);

    if (inputElement) {
        inputElement.addEventListener('blur', (e: Event) => {
            const {value} = e.target as HTMLInputElement;

            isValid = validate(value);

            loginFormData = {...loginFormData, [fieldName]: value};

            showErrorMessage(isValid, errorMsg, inputElement, loginFormInputsData)

            const inputFormValidity = loginFormInputsData.map((form: LoginFormInput) => form.isValid);

            checkFormValidity(inputFormValidity, signInBtnElement as HTMLButtonElement);

            errorContainerElement!.textContent = '';
        });

        inputElement.addEventListener('focus', () => {
            clearErrorMessage(inputElement);
        })
    }
    
})

const errorContainerElement = document.querySelector<HTMLElement>('.error-container.subheader');

signInBtnElement?.addEventListener('click', async (e: Event) => {
    e.preventDefault();
    
    try {
        const response = await postData<SuccessLoginResponse>(loginFormData, 'auth/login');

    if (response.message === 'Login successful') {
        window.location.href = '../landing/index.html';
        localStorage.setItem("auth_token", response.data.access_token);
        localStorage.setItem("username", loginFormData.login);
    }
    } catch(error) {
        errorContainerElement!.textContent = (error as Error).message;
    }
})