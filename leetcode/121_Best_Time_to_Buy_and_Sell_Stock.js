/* 
    Say you have an array for which the ith element is the price of a given stock on day i.

    If you were only permitted to complete at most one transaction 
    (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

    Note that you cannot sell a stock before you buy one.

    Example 1:
        Input: [7,1,5,3,6,4]
        Output: 5
        Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
                    Not 7-1 = 6, as selling price needs to be larger than buying price.

    Example 2:
        Input: [7,6,4,3,1]
        Output: 0
        Explanation: In this case, no transaction is done, i.e. max profit = 0.
 */

// my_code
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  const len = prices.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const profit = prices[j] - prices[i];
      if (profit > max) {
        max = profit;
      }
    }
  }

  return max;
};

// best_code
// 实际上就是求最低点与最高点的距离
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var ans = 0;
  var curLowest = prices[0];
  for (var i = 1; i < prices.length; i++) {
    curLowest = Math.min(curLowest, prices[i]); // 获取最低点
    ans = Math.max(prices[i] - curLowest, ans); // 获取最高点与最低点的距离
  }
  return ans;
};
