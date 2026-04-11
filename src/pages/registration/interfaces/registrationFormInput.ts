import { RegistrationFormData } from "./registrationFormData";

export interface RegistrationFormInput {
    fieldName: keyof RegistrationFormData;
    isValid: boolean;
    validate: (value: string) => boolean;
    errorMsg: string;
};
