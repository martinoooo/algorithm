/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

    The robot can only move either down or right at any point in time. 
    The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

    Now consider if some obstacles are added to the grids. How many unique paths would there be?

    An obstacle and empty space is marked as 1 and 0 respectively in the grid.

    Note: m and n will be at most 100.

    Example 1:

        Input:
        [
          [0,0,0],
          [0,1,0],
          [0,0,0]
        ]
        Output: 2

        Explanation:
            There is one obstacle in the middle of the 3x3 grid above.
            There are two ways to reach the bottom-right corner:
            1. Right -> Right -> Down -> Down
            2. Down -> Down -> Right -> Right

    链接：https://leetcode-cn.com/problems/unique-paths-ii
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

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
      if (obstacleGrid[i - 1][j - 1] === 1) {
        dp[i][j] = 0;
      } else {
        if (i === 1 && j === 1) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
      }
    }
  }

  return dp[m][n];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
