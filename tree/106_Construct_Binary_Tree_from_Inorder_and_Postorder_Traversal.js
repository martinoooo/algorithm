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
  let post_idx;
  const idx_map = new Map();
  const helper = (in_left, in_right) => {
    // 如果这里没有节点构造二叉树了，就结束
    if (in_left > in_right) {
      return null;
    }

    // 选择 post_idx 位置的元素作为当前子树根节点
    const root_val = postorder[post_idx];
    const root = new TreeNode(root_val);

    // 根据 root 所在位置分成左右两棵子树
    const index = idx_map.get(root_val);

    // 下标减一
    post_idx--;
    // 构造右子树
    root.right = helper(index + 1, in_right);
    // 构造左子树
    root.left = helper(in_left, index - 1);
    return root;
  };

  // 从后序遍历的最后一个元素开始
  post_idx = postorder.length - 1;

  // 建立（元素，下标）键值对的哈希表
  let idx = 0;
  inorder.forEach((val, idx) => {
    idx_map.set(val, idx);
  });
  return helper(0, inorder.length - 1);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
// console.log(buildTree([2, 1], [2, 1]));
console.log(buildTree([2, 3, 1], [3, 2, 1]));
