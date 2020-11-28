/**
 * Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

  Calling next() will return the next smallest number in the BST.

  Example:
        7
      /   \
     3    15
         / \  
        9  20 
    BSTIterator iterator = new BSTIterator(root);
    iterator.next();    // return 3
    iterator.next();    // return 7
    iterator.hasNext(); // return true
    iterator.next();    // return 9
    iterator.hasNext(); // return true
    iterator.next();    // return 15
    iterator.hasNext(); // return true
    iterator.next();    // return 20
    iterator.hasNext(); // return false
   

  Note:
    next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
    You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-search-tree-iterator
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  const result = [];
  inOrder(root);
  this.result = result;
  this.index = 0;

  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    result.push(node.val);
    inOrder(node.right);
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  this.index++;
  return this.result[this.index - 1];
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.index < this.result.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(
  7,
  new TreeNode(3),
  new TreeNode(15, new TreeNode(9), new TreeNode(20))
);
const iterator = new BSTIterator(root);
console.log(iterator.next()); // return 3
console.log(iterator.next()); // return 7
console.log(iterator.hasNext()); // return true
console.log(iterator.next()); // return 9
console.log(iterator.hasNext()); // return true
console.log(iterator.next()); // return 15
console.log(iterator.hasNext()); // return true
console.log(iterator.next()); // return 20
console.log(iterator.hasNext()); // return false
