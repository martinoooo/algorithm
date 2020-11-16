/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

  For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of 
  the two subtrees of every node never differ by more than 1.

  Example:
    Given the sorted array: [-10,-3,0,5,9],
    One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

          0
        / \
      -3   9
      /   /
    -10  5

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return build(0, nums.length - 1);

  function build(left, right) {
    const length = right - left;
    if (length < 0) return null;
    const mid = Math.ceil(length / 2) + left;
    const node = new TreeNode(nums[mid]);
    node.left = build(left, mid - 1);
    node.right = build(mid + 1, right);
    return node;
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
