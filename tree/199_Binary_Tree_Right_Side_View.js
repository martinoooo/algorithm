/**
 * Given a binary tree, imagine yourself standing on the right side of it, 
 * return the values of the nodes you can see ordered from top to bottom.

  Example:
    Input: [1,2,3,null,5,null,4]
    Output: [1, 3, 4]
  Explanation:

       1            <---
     /   \
    2     3         <---
     \     \
      5     4       <---

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-right-side-view
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [root];

  while (stack.length) {
    const length = stack.length;
    const node = stack[length - 1];
    result.push(node.val);

    for (let i = 0; i < length; i++) {
      const n = stack.shift();
      if (n.left) stack.push(n.left);
      if (n.right) stack.push(n.right);
    }
  }

  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  rightSideView(
    new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(5)),
      new TreeNode(3, null, new TreeNode(4))
    )
  )
);
