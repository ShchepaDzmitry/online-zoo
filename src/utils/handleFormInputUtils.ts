import { RegistrationFormInput } from "../pages/registration/interfaces/registrationFormInput";
import { LoginFormInput } from "../pages/sign-in/interfaces/loginFormInputs";

export const showErrorMessage = (isValid: boolean, errorMsg: string, inputFieldElem: HTMLElement, formInputData: Array<RegistrationFormInput | LoginFormInput>): void => {
    const errorMessageElement = inputFieldElem.nextElementSibling;

    if (!errorMessageElement) return;

    if (!isValid && errorMessageElement) {
        errorMessageElement.textContent = errorMsg;
        inputFieldElem.classList.add('error')
        formInputData.find((form: RegistrationFormInput | LoginFormInput) => form.fieldName === inputFieldElem.id)!.isValid = false;
    } else {
        errorMessageElement!.textContent = '';
        inputFieldElem.classList.remove('error')
        formInputData.find((form: RegistrationFormInput | LoginFormInput) => form.fieldName === inputFieldElem.id)!.isValid = true;
    }
};

export const clearErrorMessage = (inputFieldElem: HTMLElement): void => {
    const errorMessageElement = inputFieldElem.nextElementSibling;

    if (errorMessageElement!.textContent) {
        errorMessageElement!.textContent = '';
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