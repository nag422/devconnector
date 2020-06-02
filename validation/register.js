const Validator = require('validator');
const isEmpty = require('./is-empty');
module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name: '';
    data.email = !isEmpty(data.email) ? data.email: '';
    data.password = !isEmpty(data.password) ? data.password: '';
    data.password1 = !isEmpty(data.password1) ? data.password1: '';

    if(!Validator.isLength(data.name, {min:2, max: 30})) {
        errors.name = 'Name Must be between 2 ad 30 characters';
    }
    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}