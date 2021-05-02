const constants = require("./constants");
const util = require("./util");

module.exports = class valuesValidator {
  constructor(request) {
    this.request = request;
  }

  valuesValidator(request) {
    return util.missingFields(request, constants.requiredFields);
  }

  validate() {
    return valuesValidator(this.request);
  }
};
