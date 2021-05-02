const Constants = require("../utils/constants");
const util = require("../utils/util");

let data = new Map();

const searchProducts = async (items) => {
  let prices = new Map();

  await asyncForEach(items, async (value) => {
    if (data.get(value) !== undefined) {
      prices.set(value, data.get(value));
    } else {
      const params = {
        hostname: Constants.serverData.host,
        port: Constants.serverData.port,
        path: Constants.serverData.path + value,
        method: Constants.serverData.method,
      };

      price = await util.callHttp(params).catch((err) => {
        throw err;
      });
      prices.set(value, price);
      data.set(value, price);
    }
  });
  return prices;
};
const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

module.exports = { searchProducts };
