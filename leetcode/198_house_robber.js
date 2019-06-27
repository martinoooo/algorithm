/* 
    You are a professional robber planning to rob houses along a street. 
    Each house has a certain amount of money stashed, the only constraint stopping you from 
    robbing each of them is that adjacent houses have security system connected and it will 
    automatically contact the police if two adjacent houses were broken into on the same night.

    Given a list of non-negative integers representing the amount of money of each house, 
    determine the maximum amount of money you can rob tonight without alerting the police.

    Example 1:
        Input: [1,2,3,1]
        Output: 4
        Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
                    Total amount you can rob = 1 + 3 = 4.
    
    Example 2:
        Input: [2,7,9,3,1]
        Output: 12
        Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
                    Total amount you can rob = 2 + 9 + 1 = 12.
 */

// wrong
// [2,1,1,2]
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even += nums[i];
    } else {
      odd += nums[i];
    }
  }

  return odd > even ? odd : even;
};

// their_code
// 非常典型且简单的动态规划问题
// 本质上在解决对于第[i] 个房子，我们抢还是不抢。的问题
// 判断的标准就是总价值哪个更大， 那么对于抢的话就是  当前的房子可以抢的价值 + dp[i - 2]
// 如果不抢的话，就是dp[i - 1].
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function(nums) {
  // Tag: DP
  const dp = [];
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i < nums.length + 2; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);
  }

  return dp[nums.length + 1];
};

console.log(rob2([1, 2, 3, 1]));
console.log(rob2([2, 7, 9, 3, 1]));
