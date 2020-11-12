/**
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. 
 * (ie, from left to right, then right to left for the next level and alternate between).

  For example:
  Given binary tree [3,9,20,null,null,15,7],
      3
    / \
    9  20
      /  \
    15   7
  return its zigzag level order traversal as:
  [
    [3],
    [20,9],
    [15,7]
  ]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const stack = [root];
  let level = 0;
  let direct = true;
  const result = [];

  while (stack.length) {
    let size = stack.length;

    let arr = [];
    while (size) {
      const node = stack.shift();
      arr.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      size--;
    }

    if (direct) {
      result.push(arr);
    } else {
      result.push(arr.reverse());
    }
    direct = !direct;
    level++;
  }

  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  zigzagLevelOrder(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(
        20,
        new TreeNode(15),
        new TreeNode(7, new TreeNode(12, new TreeNode(13)))
      )
    )
  )
);

console.log(
  zigzagLevelOrder(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4)),
      new TreeNode(3, null, new TreeNode(5))
    )
  )
);
