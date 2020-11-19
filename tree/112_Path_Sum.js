/**
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all
 * the values along the path equals the given sum.

  Note: A leaf is a node with no children.

  Example:
    Given the below binary tree and sum = 22,
            5
          / \
         4   8
        /   / \
      11  13  4
     /  \      \
    7    2      1
  return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/path-sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  let result = false;
  traverse(root, 0);
  return result;

  function traverse(node, cur) {
    if (!node) {
      return;
    }
    if (node.left) {
      traverse(node.left, cur + node.val);
    }
    if (node.right) {
      traverse(node.right, cur + node.val);
    }
    if (!node.left && !node.right && node.val + cur == sum) result = true;
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  hasPathSum(
    new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
      new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
    ),
    22
  )
);
