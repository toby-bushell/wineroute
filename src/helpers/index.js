/**
 *
 * Returns string containing smallest to largest
 *
 * @param {{price: Number}[]} products
 */
export const pricesRange = products => {
  const prices = products.map(wine => wine.price);
  const sorted = prices.slice().sort(function(a, b) {
    return a - b;
  });

  const smallest = sorted[0];
  const largest = sorted[prices.length - 1];

  if (smallest === largest) {
    return `£${smallest}`;
  }

  return `£${smallest} to £${largest}`;
};
