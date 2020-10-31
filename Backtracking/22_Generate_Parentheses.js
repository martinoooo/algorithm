/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

    For example, given n = 3, a solution set is:

    [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
    ]

    链接：https://leetcode-cn.com/problems/generate-parentheses
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  if (n === 0) return result;
  backtracking("", 0, 0);
  return result;

  function backtracking(combinations, leftn, rightn) {
    const restn = n - leftn;
    if (restn === 0) {
      if (rightn !== n) {
        for (let i = rightn; i < n; i++) {
          combinations += ")";
        }
      }
      result.push(combinations);
    } else {
      if (leftn > rightn) {
        backtracking(combinations + "(", leftn + 1, rightn);
        backtracking(combinations + ")", leftn, rightn + 1);
      } else if (leftn === rightn) {
        backtracking(combinations + "(", leftn + 1, rightn);
      }
    }
  }
};

console.log(generateParenthesis(3));
