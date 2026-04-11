export type SuccessLoginResponse = {
    data: {
        access_token: string;
    },
    message: string;
};

export type UserProfile = {
    data: {
        login: string;
        name: string;
        email: string;
    }
};