/**
 * Given an array of integers nums sorted in ascending order,
 * find the starting and ending position of a given target value.
  If target is not found in the array, return [-1, -1].

  Follow up: Could you write an algorithm with O(log n) runtime complexity?

  Example 1:
    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]

  Example 2:
    Input: nums = [5,7,7,8,8,10], target = 6
    Output: [-1,-1]

  Example 3:
    Input: nums = [], target = 0
    Output: [-1,-1]

  Constraints:
    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
    nums is a non-decreasing array.
    -109 <= target <= 109

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var searchRange = function (nums, target) {
  let len = nums.length;
  if (len == 0) {
    return new [-1, -1];
  }

  const firstPosition = findFirstPosition(nums, target);
  if (firstPosition == -1) {
    return new [-1, -1];
  }

  const lastPosition = findLastPosition(nums, target);
  return [firstPosition, lastPosition];


  function findFirstPosition(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] == target) {
        right = mid - 1;
      } else {
        right = mid - 1;
      }
    }

    if (left >= nums.length || nums[left] != target)
      return -1;
    return left;
  }

  function findLastPosition(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] == target) {
        left = mid + 1;
      } else {
        left = mid + 1;
      }
    }
    if (right < 0 || nums[right] != target)
      return -1;
    return right;
  }
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))