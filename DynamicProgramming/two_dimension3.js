/**
 * 给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。
 * 你可以对一个单词进行如下三种操作：
 * 插入一个字符 删除一个字符 替换一个字符
 *
 * 示例：
 * 输入: word1 = "horse", word2 = "ros"
 * 输出: 3
 * 解释:
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 *
 *
 * 90% 的字符串问题都可以用动态规划解决，并且90%是采用二维数组。
 *
 */

function twoDimension(word1, word2) {
  const n1 = word1.length;
  const n2 = word2.length;

  /**
   * 创建dp
   */
  const dp = new Array(n1 + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n2 + 1);
  }

  /**
   * 初始化
   */
  dp[0][0] = 0;
  // dp[0][0...n2]的初始值
  for (let j = 1; j < n2 + 1; j++) {
    dp[0][j] = dp[0][j - 1] + 1;
  }
  // dp[0...n1][0] 的初始值
  for (let i = 1; i < n1 + 1; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }

  console.log(dp);
  /**
   * 计算出全部数组的值
   */
  // 通过公式推出 dp[n1][n2]
  for (let i = 1; i < n1 + 1; i++) {
    for (let j = 1; j < n2 + 1; j++) {
      // 如果 word1[i] 与 word2[j] 相等。第 i 个字符对应下标是 i-1
      if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(Math.min(dp[i - 1][j - 1], dp[i][j - 1]), dp[i - 1][j]) + 1;
      }
    }
  }

  console.log(dp);

  return dp[n1][n2];
}

console.log(twoDimension("horse", "ros"));
