/**
 * Given a string s, remove duplicate letters so that every letter appears once and only once.
 * You must make sure your result is the smallest in lexicographical order among all possible results.

  Example 1:
    Input: s = "bcabc"
    Output: "abc"

  Example 2:
    Input: s = "cbacdcbc"
    Output: "acdb"

  Constraints:
    1 <= s.length <= 104
    s consists of lowercase English letters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/remove-duplicate-letters
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {string} s
* @return {string}
*/
var removeDuplicateLetters = function (s) {
  const vis = new Array(26).fill(0);
  const num = _.countBy(s);

  const sb = new Array();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (!vis[ch.charCodeAt() - 'a'.charCodeAt()]) {
      while (sb.length > 0 && sb[sb.length - 1] > ch) {
        if (num[sb[sb.length - 1]] > 0) {
          vis[sb[sb.length - 1].charCodeAt() - 'a'.charCodeAt()] = 0;
          sb.pop();
        } else {
          break;
        }
      }
      vis[ch.charCodeAt() - 'a'.charCodeAt()] = 1;
      sb.push(ch);
    }
    num[ch]--;
  }
  return sb.join('');
};


console.log(removeDuplicateLetters("bcabc"))
