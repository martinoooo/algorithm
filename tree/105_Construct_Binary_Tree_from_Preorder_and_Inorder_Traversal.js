/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.

  Note:
  You may assume that duplicates do not exist in the tree.

  For example, given
    preorder = [3,9,20,15,7]
    inorder = [9,3,15,20,7]
    Return the following binary tree:

        3
      / \
      9  20
        /  \
      15   7

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return buildNNode(0, preorder.length, 0, inorder.length);

  function buildNNode(preStart, preEnd, inStart, inEnd) {
    if (preStart >= preEnd || inStart >= inEnd) {
      return null;
    }
    const root = new TreeNode(preorder[preStart]);
    for (let i = inStart; i < inEnd; i++) {
      if (inorder[i] === preorder[preStart]) {
        const gap = i - inStart;
        root.left = buildNNode(
          preStart + 1,
          preStart + gap + 1,
          inStart,
          inStart + gap
        );
        root.right = buildNNode(
          preStart + gap + 1,
          preEnd,
          inStart + gap + 1,
          inEnd
        );
        break;
      }
    }
    return root;
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([1, 2], [1, 2]));
