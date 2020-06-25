/**
 * Given a string s, find the longest palindromic substring in s. 
 * You may assume that the maximum length of s is 1000.

    Example 1:
        Input: "babad"
        Output: "bab"
        Note: "aba" is also a valid answer.

    Example 2:
        Input: "cbbd"
        Output: "bb"

    链接：https://leetcode-cn.com/problems/longest-palindromic-substring
    */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 特判
  const len = s.length;
  if (len < 2) {
    return s;
  }

  let maxLen = 1;
  let begin = 0;

  const dp = new Array(len);
  for (var i = 0; i < dp.length; i++) {
    dp[i] = new Array(len);
  }

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] != s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      // 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  console.log(dp);
  return s.substring(begin, begin + maxLen);
};

// dabab
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
