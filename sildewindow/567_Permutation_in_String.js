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
var checkInclusion = function (t, s) {
  const need = {};
  const window = {};
  for (let c of t) {
    need[c] = need[c] ? need[c] + 1 : 1;
  }
  const neddLenth = Object.keys(need).length;

  let left = 0;
  let right = 0;
  let valid = 0;
  while (right < s.length) {
    const c = s[right];
    right++;
    // 进行窗口内数据的一系列更新
    if (need[c]) {
      window[c] = window[c] ? window[c] + 1 : 1;
      if (window[c] === need[c]) {
        valid++;
      }
    }

    // 判断左侧窗口是否要收缩
    while (right - left >= t.length) {
      // 在这里判断是否找到了合法的子串
      if (valid === neddLenth) {
        return true;
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
  // 未找到符合条件的子串
  return false;
};

// console.log(checkInclusion("ab", "eidbaooo"));
// console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("abc", "ccccbbbbaaaa"));
