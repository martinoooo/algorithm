/**
 * You are given the root of a binary search tree (BST), where exactly two nodes of the tree were swapped by mistake. 
 * Recover the tree without changing its structure.

    Follow up: A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?

    Example 1:
      Input: root = [1,3,null,null,2]
      Output: [3,1,null,null,2]
      Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
   
    Example 2:
      Input: root = [3,1,4,null,null,2]
      Output: [2,1,4,null,null,3]
      Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
       

    Constraints:
      The number of nodes in the tree is in the range [2, 1000].
      -231 <= Node.val <= 231 - 1

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/recover-binary-search-tree
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let t1, t2, prev;
  traverse(root);
  let temp = t1.val;
  t1.val = t2.val;
  t2.val = temp
  return root;

  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    if (prev && node.val < prev.val) {
      if (!t1) t1 = prev;
      t2 = node;
    }
    prev = node;
    traverse(node.right);
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

console.log(recoverTree(new TreeNode(1, new TreeNode(3, null, new TreeNode(2)))))
console.log(recoverTree(new TreeNode(3, new TreeNode(1), new TreeNode(4, new TreeNode(2)))))