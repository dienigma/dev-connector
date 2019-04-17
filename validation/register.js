const Validator = require("validator");
const isEmpty = require("./isEmpty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 20 })) {
    errors.name = "Name must be between 2 or 20 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "An Name is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "An Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Emails is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be more than 6 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password is requrired";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
