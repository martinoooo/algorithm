/* 
    Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

    Example 1:
        Input: 16
        Output: true
    
    Example 2:
        Input: 5
        Output: false
    
    Follow up: Could you solve it without loops/recursion? 
*/

// 1.是二的倍数
// 2. 减去 1 是三的倍数
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  // tag: 数论

  if (num === 1) return true;
  if (num < 4) return false;

  if ((num & (num - 1)) !== 0) return false;

  return (num & 0x55555555) === num;
};

console.log(isPowerOfFour(16));
