/**
 * 问题描述：一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * @param {*} n
 */

function oneDimension(n) {
  if (n < 2) {
    return n;
  }

  /**
   * 创建dp
   */
  let dp = new Array(n + 1);

  /**
   * 初始化
   */
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  /**
   * 计算出全部数组的值
   */
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(oneDimension(3));
