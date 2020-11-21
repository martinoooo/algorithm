/**
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

  Note: A leaf is a node with no children.

  Example:
    Given the below binary tree and sum = 22,

          5
        / \
       4   8
      /   / \
     11  13  4
    /  \    / \
   7    2  5   1

  Return:
    [
      [5,4,11,2],
      [5,8,4,5]
    ]


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/path-sum-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const result = [];
  traverse(root, [], 0);
  return result;

  function traverse(node, arr, sums) {
    if (!node) return;
    if (!node.left && !node.right && node.val + sums === sum) {
      arr.push(node.val);
      result.push(arr);
    }
    if (node.left) {
      const newarr = [...arr];
      newarr.push(node.val);
      traverse(node.left, newarr, sums + node.val);
    }
    if (node.right) {
      const newarr = [...arr];
      newarr.push(node.val);
      traverse(node.right, newarr, sums + node.val);
    }
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  pathSum(
    new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
      new TreeNode(
        8,
        new TreeNode(13),
        new TreeNode(4, new TreeNode(5), new TreeNode(1))
      )
    ),
    22
  )
);
