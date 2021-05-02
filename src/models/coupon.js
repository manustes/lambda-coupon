module.exports = class Coupon {
  constructor(couponQuota) {
    this.couponQuota = couponQuota;
    this.items = new Map();
    this.profit = 0;
  }

  clear() {
    this.profit = 0;
    this.items.clear();
    return this;
  }

  addItem(key, value) {
    this.items.set(key, value);
    this.profit += value;
    return this;
  }

  deleteItem(key, value) {
    this.items.delete(key);
    this.profit -= value;
    return this;
  }

  exists(key) {
    return this.items.get(key) === undefined ? false : true;
  }
};
