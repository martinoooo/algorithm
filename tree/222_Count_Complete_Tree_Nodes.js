/**
 * Given a complete binary tree, count the number of nodes.

  Note:
    Definition of a complete binary tree from Wikipedia:
    In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

  Example:
    Input:
            1
          /  \
         2    3
        / \  /
       4  5 6

    Output: 6

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/count-complete-tree-nodes
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let count = 0;
  traverse(root);
  return count;

  function traverse(node) {
    if (!node) return;
    count++;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  countNodes(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6))
    )
  )
);
