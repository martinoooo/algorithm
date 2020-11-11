/**
 * Given a binary tree, return the level order traversal of its nodes' values. 
 * (ie, from left to right, level by level).

  For example:
    Given binary tree [3,9,20,null,null,15,7],
        3
      / \
      9  20
        /  \
      15   7
  return its level order traversal as:
    [
      [3],
      [9,20],
      [15,7]
    ]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // const result = [];
  // traverse(root, 0);
  // return result;

  // function traverse(node, level) {
  //   if (!node) return;
  //   if (!result[level]) result[level] = [];
  //   result[level].push(node.val);
  //   traverse(node.left, level + 1);
  //   traverse(node.right, level + 1);
  // }
  if (!root) return [];
  var levels = [];
  var queue = [root];
  while (queue.length) {
    var size = queue.length;
    var level = [];
    while (size) {
      var node = queue.shift();
      level.push(node.val);
      size--;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    levels.push(level);
  }
  return levels;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  levelOrder(
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
  levelOrder(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(5))))
    )
  )
);
