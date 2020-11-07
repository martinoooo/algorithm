/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).

    Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.


    Example 1:
        2
      / \
      1   3

      Input: [2,1,3]
      Output: true

    Example 2:

        5
      / \
      1   4
        / \
        3   6
      Input: [5,1,4,null,null,3,6]
      Output: false
      Explanation: The root node's value is 5 but its right child's value is 4.

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/validate-binary-search-tree
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let prev;
  return helper(root);

  function helper(node) {
    if (!node) return true;

    if (helper(node.left)) {
      if (node.val <= prev) {
        return false;
      }
      prev = node.val;
      return helper(node.right)
    };
    return false;
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


console.log(isValidBST(new TreeNode(1, new TreeNode(1))))
console.log(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))))
console.log(isValidBST(new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)))))
console.log(isValidBST(new TreeNode(10, new TreeNode(5), new TreeNode(15, new TreeNode(6), new TreeNode(20)))))