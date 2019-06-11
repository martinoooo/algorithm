/* 
    https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

    Given a binary tree, find its maximum depth.

    The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

    Note: A leaf is a node with no children.

    Example:

    Given binary tree [3,9,20,null,null,15,7],

         3
        / \
        9 20
         /  \
        15  7

    return its depth = 3.
 */

// my code
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  return findDep(root, 0);

  function findDep(leaf, depth) {
    depth++;
    let leftDepth = depth;
    let rightDepth = depth;
    if (leaf.left) {
      leftDepth = findDep(leaf.left, depth);
    }
    if (leaf.right) {
      rightDepth = findDep(leaf.right, depth);
    }
    return Math.max(leftDepth, rightDepth);
  }
};

// best code
const maxDepth2 = root => {
  if (!root) {
    return 0;
  }
  let depth = 0;
  const deeper = (node, currentDepth) => {
    const nextDepth = currentDepth + 1;
    if (node) {
      deeper(node.left, nextDepth);
      deeper(node.right, nextDepth);
    } else if (currentDepth > depth) {
      depth = currentDepth;
    }
  };
  deeper(root, 0);
  return depth;
};

const root = {
  val: 3,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7
    }
  }
};
console.log(maxDepth(null));
