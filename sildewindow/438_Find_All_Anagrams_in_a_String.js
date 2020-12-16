/**
 * Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
  Strings consists of lowercase English letters only and the length of both strings s and p will not be
  larger than 20,100.

  The order of output does not matter.

  Example 1:
    Input:
      s: "cbaebabacd" p: "abc"
    Output:
      [0, 6]

  Explanation:
    The substring with start index = 0 is "cba", which is an anagram of "abc".
    The substring with start index = 6 is "bac", which is an anagram of "abc".

  Example 2:
    Input:
      s: "abab" p: "ab"
    Output:
      [0, 1, 2]

  Explanation:
    The substring with start index = 0 is "ab", which is an anagram of "ab".
    The substring with start index = 1 is "ba", which is an anagram of "ab".
    The substring with start index = 2 is "ab", which is an anagram of "ab".

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {string} s
* @param {string} p
* @return {number[]}
*/
var findAnagrams = function (s, t) {
  const need = {};
  const window = {};
  for (let c of t) {
    need[c] = need[c] ? need[c] + 1 : 1;
  }
  const needLength = Object.keys(need).length;

  let left = 0;
  let right = 0;
  let valid = 0;
  const res = []; // 记录结果
  while (right < s.length) {
    const c = s[right];
    right++;
    // 进行窗口内数据的一系列更新
    if (need[c]) {
      window[c] = window[c] ? window[c] + 1 : 1;
      if (window[c] === need[c])
        valid++;
    }

    // 判断左侧窗口是否要收缩
    while (right - left >= t.length) {
      // 当窗口符合条件时，把起始索引加入 res
      if (valid === needLength) {
        res.push(left);
      }
      const d = s[left];
      left++;
      // 进行窗口内数据的一系列更新
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--;
        }
        window[d] = window[d] - 1;
      }
    }
  }
  return res;
};
