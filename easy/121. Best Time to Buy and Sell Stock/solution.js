const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  let left = 0;
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[left]) {
      const profit = prices[i] - prices[left];
      result = Math.max(profit, result);
    } else {
      left = i;
    }
  }
  return result;
};
