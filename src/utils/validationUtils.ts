export const validateLogin = (value: string): boolean => {
    return value.length >= 3 && /^[A-Za-z]/.test(value);
};

export const validatePassword = (value: string): boolean => {
    return value.length >= 6 && /^(?=.*[!@#$%^&*(),.?":{}|<>])/.test(value);
};