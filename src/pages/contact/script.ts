import { closeModalDialog } from "../../utils/closeModalUtils.js";
import { getUserData } from "../../utils/handleDataUtils.js";
import highlightNavElements from "../../utils/headerNavHighlightsUtils.js";
import { UserProfile } from "../sign-in/types/loginTypes.js";


window.onload = async () => {
    highlightNavElements(3);
    checkIfUserLogedIn(localStorage.getItem('username'));
    await getLoggedInUserInfo(isLoggedIn);
}

// USER LOGING SECTION

const loginUserInfoElement = document.querySelector<HTMLElement>('.login-user__info');
const loginUserModalContainer = document.querySelector<HTMLElement>('.login-user__modal');
const userLoginElement = document.querySelector<HTMLElement>('.user-login');
const userNameElement = document.querySelector<HTMLElement>('.login-user__profile-info--name');
const userEmailElement = document.querySelector<HTMLElement>('.login-user__profile-info--email');
const isLoggedInUserModalElement = document.querySelector<HTMLElement>('#isLoggedIn');
const isLoggedOutUserModalElement = document.querySelector<HTMLElement>('#isLoggedOut');
const userLoginModalCloseBtnElement = document.querySelector<HTMLButtonElement>('#userLoginModalCloseBtn');
const signOutBtnElement = document.querySelector<HTMLButtonElement>('#signOutBtn');

let isLoggedIn = false;

const checkIfUserLogedIn = (user: string | null): void => {
  if (user) {
    console.log('is loged in')
    userLoginElement!.textContent = user;
    isLoggedIn = true;
    isLoggedInUserModalElement!.style.display = 'flex';
    isLoggedOutUserModalElement!.style.display = 'none';
  } else {
    console.log('is not loged in')
    userLoginElement!.textContent = '';
    isLoggedInUserModalElement!.style.display = 'none';
    isLoggedOutUserModalElement!.style.display = 'flex';
    isLoggedIn = false;
  }
};

async function getLoggedInUserInfo(isLoggedIn: boolean) {
  if (isLoggedIn) {
    const authToken = localStorage.getItem('auth_token') as string;

    const {data: {name, email}} = await getUserData<UserProfile>(authToken, '/auth/profile');

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    userNameElement!.textContent = name;
    userEmailElement!.textContent = email;
  }
};

loginUserInfoElement?.addEventListener('click', (e)=> {
  if ((e.target as HTMLElement).closest('.login-user__info')) {
    loginUserModalContainer!.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.querySelector<HTMLElement>('.overlay')!.style.display = 'block';
  }
});

closeModalDialog(userLoginModalCloseBtnElement as HTMLElement, loginUserModalContainer as HTMLElement);

const signOutUser = () => {
  localStorage.clear();
  checkIfUserLogedIn(localStorage.getItem('username'));
}

signOutBtnElement?.addEventListener('click', () => {
  signOutUser();
  loginUserModalContainer!.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.querySelector<HTMLElement>('.overlay')!.style.display = 'none';
})


