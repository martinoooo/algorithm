/**
 * Given two binary trees, write a function to check if they are the same or not.
  Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

  Example 1:
    Input:     1         1
              / \       / \
            2   3     2   3

            [1,2,3],   [1,2,3]
    Output: true

  Example 2:
    Input:     1         1
              /           \
            2             2

            [1,2],     [1,null,2]
    Output: false

  Example 3:
    Input:     1         1
              / \       / \
            2   1     1   2

            [1,2,1],   [1,1,2]

    Output: false

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/same-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  return helper(p, q);

  function helper(p, q) {
    if (!p && !q) {
      return true;
    }
    if (!p || !q) {
      return false;
    }
    return (
      p.val === q.val && helper(p.left, q.left) && helper(p.right, q.right)
    );
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, new TreeNode(2), new TreeNode(3))
  )
);

console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2)),
    new TreeNode(1, undefined),
    new TreeNode(2)
  )
);

console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2), new TreeNode(1)),
    new TreeNode(1, new TreeNode(1), new TreeNode(2))
  )
);
