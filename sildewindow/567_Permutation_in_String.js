/**
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

    换句话说，第一个字符串的排列之一是第二个字符串的子串。

    示例1:

    输入: s1 = "ab" s2 = "eidbaooo"
    输出: True
    解释: s2 包含 s1 的排列之一 ("ba").
     

    示例2:

    输入: s1= "ab" s2 = "eidboaoo"
    输出: False
     

    注意：

    输入的字符串只包含小写字母
    两个字符串的长度都在 [1, 10,000] 之间
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  const need = {};
  const window = {};
  for (let i of s1) {
    need[i] = (need[i] || 0) + 1;
  }

  let left = 0;
  let right = 0;

  while (right < s2.length) {
    const t = s2[right];
    window[t] = (window[t] || 0) + 1;
    right++;

    while (right - left > s1.length) {
      let d = s2[left];
      left++;
      if (window[d] > 1) {
        window[d]--;
      } else {
        delete window[d];
      }
    }

    if (objEqual(need, window)) {
      return true;
    }
  }

  return false;

  function objEqual(obj1, obj2) {
    for (let k in obj1) {
      if (obj1[k] !== obj2[k]) {
        return false;
      }
    }
    return true;
  }
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
