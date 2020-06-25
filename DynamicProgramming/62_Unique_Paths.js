/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
    The robot can only move either down or right at any point in time.
     The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

    How many possible unique paths are there?

    Example 1:
        Input: m = 3, n = 2
        Output: 3
        Explanation:
        From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
        1. Right -> Right -> Down
        2. Right -> Down -> Right
        3. Down -> Right -> Right

    Example 2:
        Input: m = 7, n = 3
        Output: 28
     

    Constraints:
        1 <= m, n <= 100
        It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.

        链接：https://leetcode-cn.com/problems/unique-paths
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 0;
  }

  for (let i = 0; i < n + 1; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1] || 1;
    }
  }

  return dp[m][n];
};

console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(1, 1));
