/**
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. 
 * (ie, from left to right, level by level from leaf to root).

  For example:
    Given binary tree [3,9,20,null,null,15,7],
        3
      / \
      9  20
        /  \
      15   7
  return its bottom-up level order traversal as:
    [
      [15,7],
      [9,20],
      [3]
    ]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = [];
  traverse(root, 0);
  return result;

  function traverse(node, level) {
    if (!node) return null;
    const real_level = result.length - level;
    if (real_level) {
      result[real_level - 1].push(node.val);
    } else {
      result.unshift([]);
      result[0].push(node.val);
    }
    if (node.left) traverse(node.left, level + 1);
    if (node.right) traverse(node.right, level + 1);
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  levelOrderBottom(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);
