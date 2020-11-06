/**
 * Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

  Example:
    Input: 3
    Output:
      [
        [1,null,3,2],
        [3,2,null,1],
        [3,1,null,null,2],
        [2,1,3],
        [1,null,2,null,3]
      ]
    Explanation:
    The above output corresponds to the 5 unique BST's shown below:

      1           3     3      2      1
        \        /     /      / \      \
        3       2     1      1   3      2
      /        /       \                 \
     2        1         2                 3


    Constraints:
      0 <= n <= 8

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/unique-binary-search-trees-ii
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n == 0) {
    return [];
  }
  return helper(1, n);

  function helper(start, end) {
    const allTrees = [];
    if (start > end) {
      allTrees.push(null);
      return allTrees;
    }

    // 枚举可行根节点
    for (let i = start; i <= end; i++) {
      // 获得所有可行的左子树集合
      const leftTrees = helper(start, i - 1);

      // 获得所有可行的右子树集合
      const rightTrees = helper(i + 1, end);

      // 从左子树集合中选出一棵左子树，从右子树集合中选出一棵右子树，拼接到根节点上
      for (let left of leftTrees) {
        for (let right of rightTrees) {
          const currTree = new TreeNode(i);
          currTree.left = left;
          currTree.right = right;
          allTrees.push(currTree);
        }
      }
    }
    return allTrees;
  }
};


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


console.log(generateTrees(3))