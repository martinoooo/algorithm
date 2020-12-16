/**
 * Given a string s, find the length of the longest substring without repeating characters.

  Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

  Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

  Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

  Example 4:
    Input: s = ""
    Output: 0


  Constraints:
    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {string} s
* @return {number}
*/
var lengthOfLongestSubstring = function (s) {
  const window = {};

  let left = 0;
  let right = 0;
  let res = 0; // 记录结果
  while (right < s.length) {
    const c = s[right];
    right++;
    // 进行窗口内数据的一系列更新
    window[c] = window[c] ? window[c] + 1 : 1;
    // 判断左侧窗口是否要收缩
    while (window[c] > 1) {
      const d = s[left];
      left++;
      // 进行窗口内数据的一系列更新
      window[d] = window[d] - 1;
    }
    // 在这里更新答案
    res = Math.max(res, right - left);
  }
  return res;
};
