/* 
    Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

        * push(x) -- Push element x onto stack.
        * pop() -- Removes the element on top of the stack.
        * top() -- Get the top element.
        * getMin() -- Retrieve the minimum element in the stack.
    
    Example:
        MinStack minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        minStack.getMin();   --> Returns -3.
        minStack.pop();
        minStack.top();      --> Returns 0.
        minStack.getMin();   --> Returns -2.
 */

// my_code
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return Math.min(...this.stack);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// their_code
// 重点在于保存最小值
// 我们每次入栈的时候，保存的不再是真正的数字，而是它与当前最小值的差（当前元素没有入栈的时候的最小值）。
// 这样我们pop和top的时候拿到栈顶元素再加上上一个最小值即可。
// 另外我们在push和pop的时候去更新min，这样getMin的时候就简单了，直接返回min。

// 如果栈顶元素小于0，说明栈顶是当前最小的元素，它出栈会对min造成影响，我们需要去更新min。
// 上一个最小的是“min - 栈顶元素”,我们需要将上一个最小值更新为当前的最小值
/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  // update 'min'
  const min = this.min;
  if (x < this.min) {
    this.min = x;
  }
  return this.stack.push(x - min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const item = this.stack.pop();
  const min = this.min;

  if (item < 0) {
    this.min = min - item;
    return min;
  }
  return item + min;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const item = this.stack[this.stack.length - 1];
  const min = this.min;

  if (item < 0) {
    return min;
  }
  return item + min;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
