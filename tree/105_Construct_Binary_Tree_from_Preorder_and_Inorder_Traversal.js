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
  if (preorder.length == 0 || inorder.length == 0) {
    return null;
  }
  //根据前序数组的第一个元素，就可以确定根节点
  const root = new TreeNode(preorder[0]);
  for (let i = 0; i < preorder.length; ++i) {
    // 用preorder[0]去中序数组中查找对应的元素
    if (preorder[0] == inorder[i]) {
      // 将前序数组分成左右两半，再将中序数组分成左右两半
      // 之后递归的处理前序数组的左边部分和中序数组的左边部分
      // 递归处理前序数组右边部分和中序数组右边部分
      const pre_left = preorder.slice(1, i + 1);
      const pre_right = preorder.slice(i + 1, preorder.length);
      const in_left = inorder.slice(0, i);
      const in_right = inorder.slice(i + 1, inorder.length);
      root.left = buildTree(pre_left, in_left);
      root.right = buildTree(pre_right, in_right);
      break;
    }
  }
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([1, 2], [1, 2]));
