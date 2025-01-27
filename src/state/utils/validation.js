
const validateMinLength = (password) => {
    return password.length >= 8;
};

const validateLowercase = (password) => {
    return /[a-z]/.test(password);
};

const validateUppercase = (password) => {
    return /[A-Z]/.test(password);
};

const validateSymbol = (password) => {
    return /[#?!@$%^&*-]/.test(password);
};

export {
    validateMinLength,
    validateLowercase,
    validateUppercase,
    validateSymbol,
};