/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.

  Note:
    You may assume that duplicates do not exist in the tree.

  For example, given
    inorder = [9,3,15,20,7]
    postorder = [9,15,7,20,3]

  Return the following binary tree:

        3
      / \
     9  20
       /  \
      15   7

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let post_idx = postorder.length - 1;
  const idx_map = new Map();
  inorder.forEach((val, idx) => {
    idx_map.set(val, idx);
  });
  return traverse(0, inorder.length - 1);

  function traverse(instart, inend) {
    if (instart > inend) return null;
    const val = postorder[post_idx];
    post_idx--;
    const node = new TreeNode(val);

    const index = idx_map.get(val);
    node.right = traverse(index + 1, inend);
    node.left = traverse(instart, index - 1);
    return node;
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
// console.log(buildTree([2, 1], [2, 1]));
// console.log(buildTree([2, 3, 1], [3, 2, 1]));
