// import { redirectTo } from "./redirectToUtils";
const INITIAL_PATH = 'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/';
export async function getData(additionalPath) {
    try {
        const response = await fetch(`${INITIAL_PATH}${additionalPath}`);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    }
    catch (error) {
        throw error;
    }
}
;
export async function getUserData(authToken, additionalPath) {
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
    }
    catch (error) {
        throw error;
    }
}
;
export async function postData(body, additionalPath) {
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
    }
    catch (error) {
        throw error;
    }
}
;
