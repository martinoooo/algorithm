/**
 * 统计所有小于非负整数 n 的质数的数量。

    示例:

    输入: 10
    输出: 4
    解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrim = new Array(n).fill(true);
  for (let i = 2; i * i < n; i++) {
    if (isPrim[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrim[j] = false;
      }
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrim[i]) count++;
  }

  return count;
};

console.log(countPrimes(10));
