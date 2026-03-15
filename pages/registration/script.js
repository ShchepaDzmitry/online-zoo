import { postData } from "../../utils/handleDataUtils";
import { validateLogin, validatePassword } from "../../utils/validationUtils";
import { showErrorMessage, checkFormValidity, clearErrorMessage } from "../../utils/handleFormInputUtils";
const signUpBtnElement = document.getElementById('signUp');
const registrationFormInputsData = [
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
    {
        fieldName: 'confirmPassword',
        isValid: false,
        validate: (value) => validatePasswordConfirmation(value),
        errorMsg: 'Your passwords do not match',
    },
    {
        fieldName: 'name',
        isValid: false,
        validate: (value) => validateName(value),
        errorMsg: 'Please enter a valid name',
    },
    {
        fieldName: 'email',
        isValid: false,
        validate: (value) => validateEmail(value),
        errorMsg: 'Please enter a valid email',
    },
];
let formData = {
    login: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
};
registrationFormInputsData.forEach(({ fieldName, validate, errorMsg, isValid }) => {
    const inputElement = document.getElementById(`${fieldName}`);
    if (inputElement) {
        inputElement.addEventListener('blur', (e) => {
            const { value } = e.target;
            isValid = validate(value);
            formData = { ...formData, [fieldName]: value };
            showErrorMessage(isValid, errorMsg, inputElement, registrationFormInputsData);
            const formInputsValidity = registrationFormInputsData.map(elem => elem.isValid);
            checkFormValidity(formInputsValidity, signUpBtnElement);
            errorContainerElement.textContent = '';
        });
        inputElement.addEventListener('focus', () => {
            clearErrorMessage(inputElement);
        });
    }
});
const validatePasswordConfirmation = (value) => {
    return value === formData.password;
};
const validateName = (value) => {
    return value.length >= 3 && /^[A-Za-z]/.test(value);
};
const validateEmail = (value) => {
    return value.length >= 3 && /^[A-Za-z]/.test(value);
};
const errorContainerElement = document.querySelector('.error-container.subheader');
signUpBtnElement?.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const response = await postData(formData, 'auth/register');
        if (response.message === 'User registered successfully') {
            window.location.href = '../landing/index.html';
            localStorage.setItem("auth_token", response.data.access_token);
            localStorage.setItem("username", formData.login);
            localStorage.setItem("email", formData.email);
            localStorage.setItem("name", formData.name);
        }
    }
    catch (error) {
        errorContainerElement.textContent = error.message;
    }
});
