/**
 * Given a binary tree
  struct Node {
    int val;
    Node *left;
    Node *right;
    Node *next;
  }
  Populate each next pointer to point to its next right node. 
  If there is no next right node, the next pointer should be set to NULL.
  Initially, all next pointers are set to NULL.

  Follow up:
    You may only use constant extra space.
    Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
   

  Example 1:
    Input: root = [1,2,3,4,5,null,7]
        1
      /   \
     2    3
    / \    \
   4  5    7
    Output: [1,#,2,3,#,4,5,7,#]
        1 -> null
      /   \
     2 ->  3 -> null
    / \     \
   4-> 5 ->  7 -> null
    Explanation: Given the above binary tree (Figure A), your function should populate each next 
    pointer to point to its next right node, just like in Figure B. 
    The serialized output is in level order as connected by the next pointers, 
    with '#' signifying the end of each level.
   

  Constraints:
    The number of nodes in the given tree is less than 6000.
    -100 <= node.val <= 100

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) {
    return null;
  }
  const queue = [root];
  while (queue.length) {
    const n = queue.length;
    let last = null;
    for (let i = 1; i <= n; ++i) {
      let f = queue.shift();
      if (f.left !== null) {
        queue.push(f.left);
      }
      if (f.right !== null) {
        queue.push(f.right);
      }
      if (i !== 1) {
        last.next = f;
      }
      last = f;
    }
  }
  return root;
};

// Definition for a Node.
function TreeNode(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

// console.log(
connect(
  new TreeNode(
    2,
    new TreeNode(
      1,
      new TreeNode(0, new TreeNode(2)),
      new TreeNode(7, new TreeNode(1, new TreeNode(7)), new TreeNode(0))
    ),
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(1, new TreeNode(8), new TreeNode(8))
    )
  )
);
// );
