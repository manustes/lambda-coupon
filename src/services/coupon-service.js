const Coupon = require("../models/coupon");

const calculate = (items, amount) => {
  let base = new Coupon(amount);
  let optimum = new Coupon(amount);
  searchOptimum(base, optimum, items, false);
  return optimum;
};

const searchOptimum = (base, optimum, items, excess) => {
  if (excess) {
    if (base.profit > optimum.profit) {
      optimum.clear();
      for (let [key, value] of base.items) {
        optimum.addItem(key, value);
      }
    }
  } else {
    for (let [key, value] of items.entries()) {
      if (!base.exists(key)) {
        if (base.couponQuota >= base.profit + value) {
          base.addItem(key, value);
          searchOptimum(base, optimum, items, false);
          base.deleteItem(key);
        } else {
          searchOptimum(base, optimum, items, true);
        }
      }
    }
  }
};


module.exports = { calculate };
