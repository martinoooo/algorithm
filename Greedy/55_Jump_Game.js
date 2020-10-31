/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.

    Each element in the array represents your maximum jump length at that position.

    Determine if you are able to reach the last index.

    Example 1:
        Input: nums = [2,3,1,1,4]
        Output: true
        Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
    
    Example 2:
        Input: nums = [3,2,1,0,4]
        Output: false
        Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, 
        which makes it impossible to reach the last index.
     

    Constraints:
        1 <= nums.length <= 3 * 10^4
        0 <= nums[i][j] <= 10^5

   
    链接：https://leetcode-cn.com/problems/jump-game
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// dp
var canJump = function (nums) {
  const len = nums.length;
  if (len < 1) return false;
  const dp = new Array(len);
  dp[0] = true;

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && nums[j] >= i - j) {
        dp[i] = true;
        break;
      }
      dp[i] = false;
    }
  }

  return dp[len - 1];
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));

// theirs
// greedy
function canJump2(nums) {
  const n = nums.length;
  let rightmost = 0;
  for (let i = 0; i < n; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i]);
      if (rightmost >= n - 1) {
        return true;
      }
    }
  }
  return false;
}
console.log(canJump2([2, 3, 1, 1, 4]));
console.log(canJump2([3, 2, 1, 0, 4]));
