/* 
    Given a non-empty array of integers, every element appears twice except for one. Find that single one.

    Note:
        Your algorithm should have a linear runtime complexity. 
        Could you implement it without using extra memory?

    Example 1:
        Input: [2,2,1]
        Output: 1
    
    Example 2:
        Input: [4,1,2,1,2]
        Output: 4 
*/

// 采用的是 异或 运算
// 异或运算的规则是 如果 两个数相同则为假， 两个数不同则为真。与 0 异或 都为真。
// 两个数字异或的结果 a^b 是将 a 和 b 的二进制每一位进行运算，得出的数字。
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ret = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    ret = ret ^ element;
  }
  return ret;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
