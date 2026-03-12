import { FormData } from "../pages/registration/script";

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

export async function postData<T>(body: FormData, additionalPath?: string): Promise<T> {

  try {
    const response = await fetch(`${INITIAL_PATH}${additionalPath}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
