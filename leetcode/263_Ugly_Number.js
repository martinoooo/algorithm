/* 
    Write a program to check whether a given number is an ugly number.

    Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

    Example 1:
        Input: 6
        Output: true
        Explanation: 6 = 2 × 3

    Example 2:
        Input: 8
        Output: true
        Explanation: 8 = 2 × 2 × 2
        
    Example 3:
        Input: 14
        Output: false 
        Explanation: 14 is not ugly since it includes another prime factor 7.
    
    Note:
        1 is typically treated as an ugly number.
        Input is within the 32-bit signed integer range: [−2^31,  2^31 − 1].
*/

// my_code
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(nums) {
  //   nums = Math.abs(nums);
  if (nums === 0) return false;
  while (nums !== 1) {
    if (nums % 2 === 0) {
      nums = nums / 2;
    } else if (nums % 3 === 0) {
      nums = nums / 3;
    } else if (nums % 5 === 0) {
      nums = nums / 5;
    } else {
      return false;
    }
  }
  return true;
};

// their_code
// 先跟2比完，再跟其他的比，不要一次循环全部都比，速度快一点
var isUgly = function(num) {
  if (num == 0) {
    return false;
  }
  while (num % 2 == 0) {
    num /= 2;
  }
  while (num % 3 == 0) {
    num /= 3;
  }
  while (num % 5 == 0) {
    num /= 5;
  }
  if (num == 1) {
    return true;
  } else {
    return false;
  }
};

console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(14));
console.log(isUgly(-2147483648));
