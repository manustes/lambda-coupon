module.exports = {
  requiredFields: ["item_ids", "amount"],
  preferenceDecimals: 2,
  errorCode: {
    ERROR_STATUS_CODE: 1000,
    ERROR_PARSE_DATA: 1001,
    ERROR_HTTP_REQUETS: 1002,
    ERROR_DATA_NULL: 1003,
    ERROR_INTERNAL_UNEXPECTED: 500,
  },
  serverData: {
    host: "api.mercadolibre.com",
    port: 443,
    path: "/items/",
    method: "GET",
  },
  errorMessages: {
    1000: (value) => `${value}`,
    1001: (value) => `${value}`,
    1002: (value) => `${value}`,
    1003: (value) => `${value}`,
    500: (value) => `${value}`,
  },
  messageSuccessfully: (responseService) => ({
    statusCode: 200,
    body: JSON.stringify(responseService),
  }),
  messageFail: {
    statusCode: 404,
  },
};
