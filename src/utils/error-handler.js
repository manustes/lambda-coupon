const constants = require("./constants.js");

class CustomError extends Error {
  constructor(error, customErrorCode, payload) {
    super(constants.errorMessages[customErrorCode](payload));
    this.error = error;
    this.customErrorCode = customErrorCode;
    this.customErrorMessage = constants.errorMessages[customErrorCode](payload);
  }

  static getError(error) {
    if (!(error instanceof CustomError)) {
      error = new CustomError(
        "customError",
        constants.errorCode.ERROR_INTERNAL_UNEXPECTED,
        constants.errorCode.ERROR_INTERNAL_UNEXPECTED
      );
    }

    return {
      statusCode: error.customErrorCode,
      message: error.customErrorMessage,
    };
  }
}

module.exports = CustomError;
