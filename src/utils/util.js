const https = require("https");
const CustomError = require("../utils/error-handler");
const Constants = require("../utils/constants");

const duplicates = (items) => {
  let itemsUnique = items.filter((value, key) => {
    return items.indexOf(value) === key;
  });

  return itemsUnique;
};

const missingFields = (jsonInput, requiredFields) =>
  requiredFields.find((key) => !jsonInput[key]);

const callHttp = (params) => {
  return new Promise((res, rej) => {
    let request = https.get(params, (response) => {
      let statusCode = response.statusCode;
      if (statusCode != 200) {
        rej(
          new CustomError(
            "customError",
            Constants.errorCode.ERROR_STATUS_CODE,
            statusCode
          )
        );
      }

      let rawData = "";
      response.on("data", (chunk) => {
        rawData += chunk;
      });

      response.on("end", () => {
        try {
          let request = JSON.parse(rawData);
          res(Math.round((request.price + Number.EPSILON) * 100) / 100);
        } catch (error) {
          rej(
            new CustomError(
              "customError",
              Constants.errorCode.ERROR_PARSE_DATA,
              error
            )
          );
        }
      });
    });
    request.on("error", (error) => {
      rej(
        new CustomError(
          "customError",
          Constants.errorCode.ERROR_HTTP_REQUETS,
          error
        )
      );
    });

    request.end();
  });
};

module.exports = { duplicates, missingFields, callHttp };
