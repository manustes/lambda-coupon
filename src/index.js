const errorHandler = require("./utils/error-handler");
const constants = require("./utils/constants");
const util = require("./utils/util");
const productService = require("./services/product-service");
const calculateService = require("./services/coupon-service");

exports.handler = async (event, context) => {
  try {
    const requestBody = event.body;
    const missingField = util.missingFields(
      requestBody,
      constants.requiredFields
    );
    if (missingField)
      throw new errorHandler(
        "customError",
        constants.errorCode.ERROR_DATA_NULL,
        missingField
      );
    const items = util.duplicates(requestBody.item_ids);
    const itemsPrice = await productService.searchProducts(items);
    const objectResponse = calculateService.calculate(
      itemsPrice,
      requestBody.amount
    );

    if (objectResponse.profit > 0) {
      return constants.messageSuccessfully({
        item_ids: [...objectResponse.items.keys()],
        total: objectResponse.profit,
      });
    } else {
      return constants.messageFail;
    }
  } catch (error) {
    return errorHandler.getError(error);
  }
};
