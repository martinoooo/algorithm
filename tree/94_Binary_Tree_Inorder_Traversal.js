/**
 * 
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
  
  Example 1:
    Input: root = [1,null,2,3]
    Output: [1,3,2]

  Example 2:
    Input: root = []
    Output: []

  Example 3:
    Input: root = [1]
    Output: [1]

  Example 4:
    Input: root = [1,2]
    Output: [2,1]

  Example 5:
    Input: root = [1,null,2]
    Output: [1,2]
   

  Constraints:
    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100
   

  Follow up:
    Recursive solution is trivial, could you do it iteratively?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  traverse(root);
  return result;

  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
};


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

console.log(inorderTraversal(new TreeNode(1, new TreeNode(3, null, new TreeNode(2)))))
console.log(inorderTraversal(new TreeNode(3, new TreeNode(1), new TreeNode(4, new TreeNode(2)))))