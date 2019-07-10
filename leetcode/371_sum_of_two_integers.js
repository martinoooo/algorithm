/* 
    Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

    Example 1:
        Input: a = 1, b = 2
        Output: 3
    
    Example 2:
        Input: a = -2, b = 3
        Output: 1
 */

/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if (a === 0) return b;

  if (b === 0) return a;

  return getSum(a ^ b, (a & b) << 1);
};
