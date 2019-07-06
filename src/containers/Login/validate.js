
const validate = (values) => {
    const errors = {};

    if (!values.email || values.email.trim() === '') {
        errors.email = 'Please enter email address';
    }
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please enter a valid email address';
    }
    if (!values.password || values.password.trim() === '') {
        errors.password = 'Please enter password';
    }
    if (values.password && values.password.trim().length < 8) {
        errors.password = 'Please enter minimum 8 characters';
    }
    else if (values.password && !values.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{8,}/)) {
        errors.password = 'New Password must have atleast 1 upper case, 1 lower case, 1 number and 1 special character from($@!%*?&)';
    }
    return errors;
};


export default validate;