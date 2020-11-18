/**
 * Given a binary tree, find its minimum depth.
  The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

  Note: A leaf is a node with no children.
  
  Example 1:
    Input: root = [3,9,20,null,null,15,7]
         3
        / \
       9  20
         /  \ 
        15  7
    Output: 2
  
  Example 2:
    Input: root = [2,null,3,null,4,null,5,null,6]
         2
          \
          3
           \ 
            4
            \ 
             5
              \ 
              6

    Output: 5
   
  Constraints:
    The number of nodes in the tree is in the range [0, 105].
    -1000 <= Node.val <= 1000


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  let min;
  traverse(root, 1);
  return min;

  function traverse(node, level) {
    if (!node) return;
    if (!node.left && !node.right) {
      min = min ? Math.min(min, level) : level;
    }
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  minDepth(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);

console.log(
  minDepth(
    new TreeNode(
      2,
      null,
      new TreeNode(
        3,
        null,
        new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))
      )
    )
  )
);
