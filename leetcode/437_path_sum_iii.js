/* 
    You are given a binary tree in which each node contains an integer value.
    Find the number of paths that sum to a given value.
    The path does not need to start or end at the root or a leaf, but it must go downwards 
    (traveling only from parent nodes to child nodes).
    The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

    Example:
        root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

             10
            /  \
           5   -3
          / \    \
         3   2   11
        / \   \
       3  -2   1

    Return 3. The paths that sum to 8 are:
        1.  5 -> 3
        2.  5 -> 2 -> 1
        3. -3 -> 11 
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function helper(root, acc, target, hashmap) {
  // see also : https://leetcode.com/problems/subarray-sum-equals-k/

  if (root === null) return 0;
  let count = 0;
  acc += root.val;
  if (acc === target) count++;
  if (hashmap[acc - target] !== void 0) {
    count += hashmap[acc - target];
  }
  if (hashmap[acc] === void 0) {
    hashmap[acc] = 1;
  } else {
    hashmap[acc] += 1;
  }
  const res =
    count +
    helper(root.left, acc, target, hashmap) +
    helper(root.right, acc, target, hashmap);

  // 这里要注意别忘记了
  hashmap[acc] = hashmap[acc] - 1;

  return res;
}

var pathSum = function(root, sum) {
  // 时间复杂度和空间复杂度都是O(n)
  const hashmap = {};
  return helper(root, 0, sum, hashmap);
};
