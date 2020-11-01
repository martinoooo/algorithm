/**
 * Given a non-empty binary tree, find the maximum path sum.

    For this problem, a path is defined as any node sequence from some starting node to any node in the 
    tree along the parent-child connections. The path must contain at least one node and does not need 
    to go through the root.

     

    Example 1:
      Input: root = [1,2,3]
      Output: 6
      
    Example 2:
      Input: root = [-10,9,20,null,null,15,7]
      Output: 42
     

    Constraints:
      The number of nodes in the tree is in the range [0, 3 * 104].
      -1000 <= Node.val <= 1000

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/binary-tree-maximum-path-sum
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER;
  getOneSideMax(root);
  return max;

  function getOneSideMax(node) {
    if (!node) return 0;
    const leftMax = Math.max(0, getOneSideMax(node.left));
    const rightMax = Math.max(0, getOneSideMax(node.right));
    max = Math.max(max, leftMax + rightMax + node.val);
    return Math.max(leftMax, rightMax) + node.val;
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

// console.log(maxPathSum(tree1));

// const temp = new TreeNode(20, new TreeNode(15), new TreeNode(7));
// const tree2 = new TreeNode(-10, new TreeNode(9), temp);

// console.log(maxPathSum(tree2));

const tree3 = new TreeNode(-3);
console.log(maxPathSum(tree3));
