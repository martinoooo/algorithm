/**
 * Given two strings s and t, return the minimum window in s which will contain all the characters in t.
 * If there is no such window in s that covers all characters in t, return the empty string "".

  Note that If there is such a window, it is guaranteed that there will always be only one unique
  minimum window in s.

  Example 1:
    Input: s = "ADOBECODEBANC", t = "ABC"
    Output: "BANC"

  Example 2:
  Input: s = "a", t = "a"
  Output: "a"

  Constraints:
    1 <= s.length, t.length <= 105
    s and t consist of English letters.

  Follow up: Could you find an algorithm that runs in O(n) time?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-window-substring
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {string} s
* @param {string} t
* @return {string}
*/
var minWindow = function (s, t) {
  const need = new Map();
  const window = new Map();
  for (let c of t) {
    if (need.has(c)) {
      need.set(c, need.get(c) + 1)
    } else {
      need.set(c, 1)
    }
  };

  let left = 0;
  let right = 0;
  let valid = 0;
  // 记录最小覆盖子串的起始索引及长度
  let start = 0, len = Infinity;
  while (right < s.length) {
    // c 是将移入窗口的字符
    const c = s[right];
    // 右移窗口
    right++;
    // 进行窗口内数据的一系列更新
    if (need.has(c)) {
      if (window.has(c)) {
        window.set(c, window.get(c) + 1)
      } else {
        window.set(c, 1)
      }
      if (window.get(c) == need.get(c))
        valid++;
    }

    // 判断左侧窗口是否要收缩
    while (valid === need.size) {
      // 在这里更新最小覆盖子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      // d 是将移出窗口的字符
      const d = s[left];
      // 左移窗口
      left++;
      // 进行窗口内数据的一系列更新
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1)
      }
    }
  }
  // 返回最小覆盖子串
  return len == Infinity ?
    "" : s.substr(start, len);
};


// console.log(minWindow("ADOBECODEBANC", "ABC"))
console.log(minWindow("a", "aa"))
