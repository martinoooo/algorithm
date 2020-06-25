/**
 * Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

    Example:
			Input: 3
			Output: 5
			Explanation:
			Given n = 3, there are a total of 5 unique BST's:

			1         3     3      2      1        
			\       /     /      / \      \
			3     2     1      1   3      2
			/     /       \                 \
		2     1         2                 3

    链接：https://leetcode-cn.com/problems/unique-binary-search-trees
 */

//  n = 1  --> 1 1
//  n = 2  --> 2 2*1  1 2, 2 1   f(1) + f(1) = 2
//  n = 3  --> 5 3*2*1 = 6; (1*f(0)* 1*f(2)) + (1*f(1)* 1*f(1)) + (1*f(2)* 1*f(0))  ==> 2 + 1 + 2;   2 + 2 + 1;  1 2 3, 1 3 2, 2 1 3, 2 3 1, 3 1 2, 3 2 1
//  n = 4  --> 14 4*3*2*1 = 24;  5 + 5 + 4
// (f(3)) + (f(1)* f(2)) + (f(2) * f(1)) + (f(3)) ==> 5 + 4 + 4 + 5

// n = 5
// f(4) + f(3) * f(1) * 3
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n < 2) {
    return n;
  }

  /**
   * 创建dp
   */
  let dp = new Array(n + 1);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    dp[i] = 0;
    // go Through
    for (let j = 0; j < i; j++) {
      const rest = i - 1 - j;
      let val = dp[j] * dp[rest];
      dp[i] += val;
    }
  }

  console.log(dp);
  return dp[n];
};

console.log(numTrees(5));
// console.log(numTrees(4));
// console.log(numTrees(3));
// console.log(numTrees(2));
// console.log(numTrees(1));
