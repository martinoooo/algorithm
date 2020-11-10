/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

  For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

        1
      / \
      2   2
    / \ / \
  3  4 4  3
   

  But the following [1,2,2,null,3,null,3] is not:

      1
    / \
    2   2
    \   \
    3    3
   

  Follow up: Solve it both recursively and iteratively.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/symmetric-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const check = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
  };

  return check(root, root);
};

console.log(
  isSymmetric(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    )
  )
);

console.log(
  isSymmetric(
    new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, null, new TreeNode(3))
    )
  )
);

console.log(
  isSymmetric(
    new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, new TreeNode(3), null)
    )
  )
);
