export const showErrorMessage = (isValid, errorMsg, inputFieldElem, formInputData) => {
    const errorMessageTextElement = inputFieldElem.nextElementSibling.lastElementChild;
    const errorMessageIconElement = inputFieldElem.nextElementSibling.firstElementChild;
    if (!errorMessageTextElement)
        return;
    if (!isValid && errorMessageTextElement) {
        errorMessageTextElement.textContent = errorMsg;
        errorMessageIconElement.style.display = 'inline';
        inputFieldElem.classList.add('error');
        formInputData.find((form) => form.fieldName === inputFieldElem.id).isValid = false;
    }
    else {
        errorMessageIconElement.style.display = 'none';
        errorMessageTextElement.textContent = '';
        inputFieldElem.classList.remove('error');
        formInputData.find((form) => form.fieldName === inputFieldElem.id).isValid = true;
    }
};
export const clearErrorMessage = (inputFieldElem) => {
    const errorMessageTextElement = inputFieldElem.nextElementSibling.lastElementChild;
    const errorMessageIconElement = inputFieldElem.nextElementSibling.firstElementChild;
    if (errorMessageTextElement.textContent) {
        errorMessageTextElement.textContent = '';
        errorMessageIconElement.style.display = 'none';
        inputFieldElem.classList.remove('error');
    }
};
export const checkFormValidity = (arr, btnElement) => {
    if (!arr.includes(false)) {
        btnElement.disabled = false;
    }
    else {
        btnElement.disabled = true;
    }
};
