import { closeModalDialog } from "../../utils/closeModalUtils.js";
import { getUserData } from "../../utils/handleDataUtils.js";
import highlightNavElements from "../../utils/headerNavHighlightsUtils.js";
window.onload = async () => {
    highlightNavElements(3);
    checkIfUserLogedIn(localStorage.getItem('username'));
    await getLoggedInUserInfo(isLoggedIn);
};
// USER LOGING SECTION
const loginUserInfoElement = document.querySelector('.login-user__info');
const loginUserModalContainer = document.querySelector('.login-user__modal');
const userLoginElement = document.querySelector('.user-login');
const userNameElement = document.querySelector('.login-user__profile-info--name');
const userEmailElement = document.querySelector('.login-user__profile-info--email');
const isLoggedInUserModalElement = document.querySelector('#isLoggedIn');
const isLoggedOutUserModalElement = document.querySelector('#isLoggedOut');
const userLoginModalCloseBtnElement = document.querySelector('#userLoginModalCloseBtn');
const signOutBtnElement = document.querySelector('#signOutBtn');
let isLoggedIn = false;
const checkIfUserLogedIn = (user) => {
    if (user) {
        console.log('is loged in');
        userLoginElement.textContent = user;
        isLoggedIn = true;
        isLoggedInUserModalElement.style.display = 'flex';
        isLoggedOutUserModalElement.style.display = 'none';
    }
    else {
        console.log('is not loged in');
        userLoginElement.textContent = '';
        isLoggedInUserModalElement.style.display = 'none';
        isLoggedOutUserModalElement.style.display = 'flex';
        isLoggedIn = false;
    }
};
async function getLoggedInUserInfo(isLoggedIn) {
    if (isLoggedIn) {
        const authToken = localStorage.getItem('auth_token');
        const { data: { name, email } } = await getUserData(authToken, '/auth/profile');
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        userNameElement.textContent = name;
        userEmailElement.textContent = email;
    }
}
;
loginUserInfoElement?.addEventListener('click', (e) => {
    if (e.target.closest('.login-user__info')) {
        loginUserModalContainer.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.querySelector('.overlay').style.display = 'block';
    }
});
closeModalDialog(userLoginModalCloseBtnElement, loginUserModalContainer);
const signOutUser = () => {
    localStorage.clear();
    checkIfUserLogedIn(localStorage.getItem('username'));
};
signOutBtnElement?.addEventListener('click', () => {
    signOutUser();
    loginUserModalContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.querySelector('.overlay').style.display = 'none';
});
