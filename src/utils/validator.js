const dataValidator = require("./data-validation");

const validateRequest = (request) => {
  let validators = [dataValidator];
  return validators.every((func) => new func(request).validate());
};

module.exports = {
    validateRequest,
};