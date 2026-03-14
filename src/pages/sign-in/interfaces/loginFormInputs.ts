import { LoginFormData } from "./loginFormData";

export interface LoginFormInput {
    fieldName: keyof LoginFormData;
    isValid: boolean;
    validate: (value: string) => boolean;
    errorMsg: string;
};
