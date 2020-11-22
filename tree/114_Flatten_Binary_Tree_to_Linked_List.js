/**
 * Given a binary tree, flatten it to a linked list in-place.

  For example, given the following tree:

       1
      / \
     2   5
    / \   \
   3   4   6
  The flattened tree should look like:

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let last = null;
  traverse(root);

  function traverse(node) {
    if (!node) return;
    traverse(node.right);
    traverse(node.left);
    node.right = last;
    node.left = null;
    last = node;
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  flatten(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(5, null, new TreeNode(6))
    )
  )
);
