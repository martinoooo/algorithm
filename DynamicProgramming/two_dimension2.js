/**
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 * 举例：
 * 输入:
 * arr = [
 *  [1,3,1],
 *  [1,5,1],
 *  [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 */

function twoDimension(arr) {
  const m = arr.length;
  const n = arr[0].length;

  if (n < 1 || m < 1) {
    return 0;
  }

  /**
   * 创建dp
   */
  const dp = new Array(m);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n);
  }

  /**
   * 初始化
   */
  dp[0][0] = arr[0][0];
  // 初始化最左边的列
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + arr[i][0];
  }
  // 初始化最上边的行
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + arr[0][i];
  }

  /**
   * 计算出全部数组的值
   */
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + arr[i][j];
    }
  }

  return dp[m - 1][n - 1];
}

console.log(
  twoDimension([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
);
