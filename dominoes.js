// function throttle(func, wait) {
//   var timeout;

//   return function (...args) {
//     context = this;
//     if (!timeout) {
//       timeout = setTimeout(function () {
//         timeout = null;
//         func.apply(context, args);
//       }, wait);
//     }
//   };
// }

// function deepClone(object) {
//   const type =Object.prototype.toString.call(obj)]
// }

var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1;
  let ans = "";
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = rk - i + 1 > ans.length ? s.substring(i, rk + 1) : ans; //   Math.max(ans, rk - i + 1);
  }
  return ans;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
