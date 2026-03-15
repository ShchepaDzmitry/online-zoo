import { postData } from "../../utils/handleDataUtils";
import { validateLogin, validatePassword } from "../../utils/validationUtils";
import { showErrorMessage, checkFormValidity, clearErrorMessage } from "../../utils/handleFormInputUtils";
const signInBtnElement = document.querySelector('#signInBtn');
let loginFormData = {
    login: '',
    password: '',
};
const loginFormInputsData = [
    {
        fieldName: 'login',
        isValid: false,
        validate: (value) => validateLogin(value),
        errorMsg: 'Please enter a valid login',
    },
    {
        fieldName: 'password',
        isValid: false,
        validate: (value) => validatePassword(value),
        errorMsg: 'Please enter a valid password',
    },
];
loginFormInputsData.forEach(({ fieldName, validate, isValid, errorMsg }) => {
    const inputElement = document.getElementById(`${fieldName}`);
    if (inputElement) {
        inputElement.addEventListener('blur', (e) => {
            const { value } = e.target;
            isValid = validate(value);
            loginFormData = { ...loginFormData, [fieldName]: value };
            showErrorMessage(isValid, errorMsg, inputElement, loginFormInputsData);
            const inputFormValidity = loginFormInputsData.map((form) => form.isValid);
            checkFormValidity(inputFormValidity, signInBtnElement);
            errorContainerElement.textContent = '';
        });
        inputElement.addEventListener('focus', () => {
            clearErrorMessage(inputElement);
        });
    }
});
const errorContainerElement = document.querySelector('.error-container.subheader');
signInBtnElement?.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const response = await postData(loginFormData, 'auth/login');
        if (response.message === 'Login successful') {
            window.location.href = '../landing/index.html';
            localStorage.setItem("auth_token", response.data.access_token);
            localStorage.setItem("username", loginFormData.login);
        }
    }
    catch (error) {
        errorContainerElement.textContent = error.message;
    }
});
