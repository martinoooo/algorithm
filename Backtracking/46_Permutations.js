/**
 * Given an array nums of distinct integers, return all the possible permutations. 
 * You can return the answer in any order.

  Example 1:
    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  Example 2:
    Input: nums = [0,1]
    Output: [[0,1],[1,0]]

  Example 3:
    Input: nums = [1]
    Output: [[1]]
   

  Constraints:
    1 <= nums.length <= 6
    -10 <= nums[i] <= 10
    All the integers of nums are unique.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/permutations
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {number[]} nums
* @return {number[][]}
*/
var permute = function (nums) {
  // const result = [];
  // traverse([], nums);
  // return result;

  // function traverse(arr, rest) {
  //   if (rest.length === 0) {
  //     result.push(arr);
  //   }
  //   for (let i = 0; i < rest.length; i++) {
  //     const newArr = [...arr];
  //     newArr.push(rest[i]);
  //     const newRest = [...rest]
  //     newRest.splice(i, 1);
  //     traverse([...newArr], [...newRest])
  //   }
  // }

  const result = []
  const DFS = function (arr) {
    if (arr.length === nums.length) {
      result.push(arr.slice())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) {
        arr.push(nums[i])
        DFS(arr)
        arr.pop(nums[i])
      }
    }
  }

  DFS([])

  return result
};

console.log(permute([1, 2, 3]))