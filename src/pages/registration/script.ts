import { postData } from "../../utils/handleDataUtils";

const loginInputElement = document.getElementById('login');
const passwordInputElement = document.getElementById('password');
const confirmPasswordInputElement = document.getElementById('confirmPassword');
const nameInputElement = document.getElementById('name');
const emailInputElement = document.getElementById('email');
const signUpBtnElement = document.getElementById('signUp');
const cancelBtnElement = document.getElementById('cancel');

export interface FormData {
    login: string;
    password: string;
    confirmPassword?: string;
    name: string;
    email: string;
}

let formData: FormData = {
    login: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
};

const setinputValue = (inputElement: HTMLInputElement, fieldName: string) => {
    inputElement.addEventListener('input', (e) => {
        const {value} = e.target as HTMLInputElement;
    
        formData = {...formData, [fieldName]: value}
    });
}

const validateName = (value: string): boolean => {
    return value.length >= 3 && /^[A-Za-z]/.test(value);
};

setinputValue(loginInputElement as HTMLInputElement, 'login');
setinputValue(passwordInputElement as HTMLInputElement, 'password');
setinputValue(confirmPasswordInputElement as HTMLInputElement, 'confirmPassword');
setinputValue(nameInputElement as HTMLInputElement, 'name');
setinputValue(emailInputElement as HTMLInputElement, 'email');



signUpBtnElement?.addEventListener('click', async () => {
    await postData(formData, 'auth/register')
    console.log(formData)
});

