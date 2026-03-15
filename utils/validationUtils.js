export const validateLogin = (value) => {
    return value.length >= 3 && /^[A-Za-z]/.test(value);
};
export const validatePassword = (value) => {
    return value.length >= 6 && /^[A-Za-z]/.test(value);
};
