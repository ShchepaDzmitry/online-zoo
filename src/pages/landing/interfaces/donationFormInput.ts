import { DonationFormData } from "./donationFormData";

export interface DonationFormInput {
    fieldName: keyof DonationFormData;
    isValid: boolean;
    validate: (value: string) => boolean;
    errorMsg: string;
};
