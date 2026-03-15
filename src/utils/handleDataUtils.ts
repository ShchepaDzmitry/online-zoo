import { RegistrationFormData } from "../pages/registration/interfaces/registrationFormData";
import { LoginFormData } from "../pages/sign-in/interfaces/loginFormData";
// import { redirectTo } from "./redirectToUtils";

const INITIAL_PATH = 'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/';

export async function getData<T>(additionalPath?: string): Promise<T> {

    try {
      const response = await fetch(`${INITIAL_PATH}${additionalPath}`);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      throw error;
    }
};

export async function getUserData<T>(authToken: string, additionalPath?: string): Promise<T> {

  try {
    const response = await fetch(`${INITIAL_PATH}${additionalPath}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export async function postData<T>(body: RegistrationFormData | LoginFormData, additionalPath?: string): Promise<T> {

  try {
    const response = await fetch(`${INITIAL_PATH}${additionalPath}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(`HTTP error: ${response.status}, ${errorMessage.error}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
