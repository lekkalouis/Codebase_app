const prices = new Map([
  ['FLSS-001', { sku: 'FLSS-001', retail: 199.0, wholesale: 149.0 }]
]);

export const pricingStore = {
  list() {
    return [...prices.values()];
  },
  set(price) {
    prices.set(price.sku, price);
    return price;
  }
};
