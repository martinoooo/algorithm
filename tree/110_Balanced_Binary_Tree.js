/**
 * Given a binary tree, determine if it is height-balanced.
  For this problem, a height-balanced binary tree is defined as:
    a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

  Example 1:
    Input: root = [3,9,20,null,null,15,7]
         3
        / \
       9  20
         /  \ 
        15  7
    Output: true

  Example 2:
    Input: root = [1,2,2,3,3,null,null,4,4]
             1
            / \
          2   2 
        /  \ 
       3   3
      / \ 
    4    4
    Output: false

  Example 3:
    Input: root = []
    Output: true
 
  Constraints:
    The number of nodes in the tree is in the range [0, 5000].
    -104 <= Node.val <= 104

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/balanced-binary-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let result = true;
  height(root, 0);
  return result;

  function height(node, level) {
    if (!node) return level;
    const left = height(node.left, level + 1);
    const right = height(node.right, level + 1);
    if (Math.abs(left - right) > 1) result = false;
    if (left > right) {
      return left;
    }
    return right;
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  isBalanced(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);

console.log(
  isBalanced(
    new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(3, new TreeNode(4), new TreeNode(4)),
        new TreeNode(3)
      ),
      new TreeNode(2)
    )
  )
);
