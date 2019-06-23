/* 
    Given an array of size n, find the majority element. 
    The majority element is the element that appears more than ⌊ n/2 ⌋ times.

    You may assume that the array is non-empty and the majority element always exist in the array.

    Example 1:
        Input: [3,2,3]
        Output: 3
    
    Example 2:
        Input: [2,2,1,1,1,2,2]
        Output: 2 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const temp = {};
  let majority;

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    !temp[val] && (temp[val] = 0);
    temp[val]++;
    if (!temp[majority]) {
      majority = val;
    }
    if (temp[val] > temp[majority]) {
      majority = val;
    }
  }

  return majority;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// their_code
// 投票算法: 核心是 出现次数大于总数1/2
// 投票算法的原理是通过不断消除不同元素直到没有不同元素，剩下的元素就是我们要找的元素。
var majorityElement = function(nums) {
  let count = 1;
  let majority = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};
