/**
 * 
 * https://leetcode-cn.com/problems/is-subsequence
 * 
 * Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting 
some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
(ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by 
one to see if T has its subsequence. In this scenario, how would you change your code?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.

 

Example 1:

    Input: s = "abc", t = "ahbgdc"
    Output: true
    Example 2:

    Input: s = "axc", t = "ahbgdc"
    Output: false
 

Constraints:

    0 <= s.length <= 100
    0 <= t.length <= 10^4
    Both strings consists only of lowercase characters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0 && t.length === 0) return true;
  let i = 0;
  while (s.length !== 0 && i < t.length) {
    if (s[0] === t[i]) {
      s = s.substr(1);
    }
    i++;
  }
  if (s.length !== 0 && i === t.length) {
    return false;
  }
  return true;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("", ""));
console.log(isSubsequence("ahbgdc", "abc"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));
