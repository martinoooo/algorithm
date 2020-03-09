/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

    示例:

    输入: [-2,1,-3,4,-1,2,1,-5,4],
    输出: 6
    解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
    进阶:

    如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  return helper(nums, 0, nums.length - 1);

  function helper(nums, left, right) {
    if (left === right) {
      return nums[left];
    }
    const mid = Math.floor((left + right) / 2);
    const leftSum = helper(nums, left, mid); // 最大子序要么全在中心左侧
    const rightSum = helper(nums, mid + 1, right); // 要么在右侧
    const crossSum = crossSumHelper(nums, left, right, mid); // 要么跨中心

    console.log(Math.max(Math.max(leftSum, rightSum), crossSum));
    return Math.max(Math.max(leftSum, rightSum), crossSum);
  }

  function crossSumHelper(nums, left, right, p) {
    if (left == right) return nums[left];

    let leftSubsum = Number.MIN_VALUE;
    let currSum = 0;
    for (let i = p; i > left - 1; --i) {
      currSum += nums[i];
      leftSubsum = Math.max(leftSubsum, currSum);
    }

    let rightSubsum = Number.MIN_VALUE;
    currSum = 0;
    for (let i = p + 1; i < right + 1; ++i) {
      currSum += nums[i];
      rightSubsum = Math.max(rightSubsum, currSum);
    }
    return leftSubsum + rightSubsum;
  }
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
