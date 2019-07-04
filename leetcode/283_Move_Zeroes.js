/* 
    Given an array nums, write a function to move all 0's to the end of it while maintaining 
    the relative order of the non-zero elements.

    Example:
        Input: [0,1,0,3,12]
        Output: [1,3,12,0,0]
    
    Note:
        You must do this in-place without making a copy of the array.
        Minimize the total number of operations. 
*/

// their_code
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    const temp = nums[i];
    if (temp === 0) continue;
    let prev = i - 1;
    while (nums[prev] !== undefined && nums[prev] === 0) {
      prev--;
    }
    nums.splice(prev + 1, 0, temp);
    nums.splice(i + 1, 1);
  }

  return nums;
};

// best_code
// 我们可以借助一个游标记录位置，然后遍历一次，将非0的原地修改，最后补0即可。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[index] = nums[i];
      index += 1;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
