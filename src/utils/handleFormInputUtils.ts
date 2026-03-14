import { RegistrationFormInput } from "../pages/registration/interfaces/registrationFormInput";
import { LoginFormInput } from "../pages/sign-in/interfaces/loginFormInputs";

export const showErrorMessage = (isValid: boolean, errorMsg: string, inputFieldElem: HTMLElement, formInputData: Array<RegistrationFormInput | LoginFormInput>): void => {
    const errorMessageTextElement = inputFieldElem.nextElementSibling!.lastElementChild;
    const errorMessageIconElement = inputFieldElem.nextElementSibling!.firstElementChild as HTMLElement;

    if (!errorMessageTextElement) return;

    if (!isValid && errorMessageTextElement) {
        errorMessageTextElement.textContent = errorMsg;
        errorMessageIconElement!.style.display = 'inline';
        inputFieldElem.classList.add('error')
        formInputData.find((form: RegistrationFormInput | LoginFormInput) => form.fieldName === inputFieldElem.id)!.isValid = false;
    } else {
        errorMessageIconElement!.style.display = 'none';
        errorMessageTextElement!.textContent = '';
        inputFieldElem.classList.remove('error')
        formInputData.find((form: RegistrationFormInput | LoginFormInput) => form.fieldName === inputFieldElem.id)!.isValid = true;
    }
};

export const clearErrorMessage = (inputFieldElem: HTMLElement): void => {
    const errorMessageTextElement = inputFieldElem.nextElementSibling!.lastElementChild;
    const errorMessageIconElement = inputFieldElem.nextElementSibling!.firstElementChild as HTMLElement;

    if (errorMessageTextElement!.textContent) {
        errorMessageTextElement!.textContent = '';
        errorMessageIconElement!.style.display = 'none';
        inputFieldElem.classList.remove('error')
    }
};

export const checkFormValidity = (arr: boolean[], btnElement: HTMLButtonElement) => {
    if (!arr.includes(false)) {
        btnElement.disabled = false;
    } else {
        btnElement.disabled = true;
    }
}