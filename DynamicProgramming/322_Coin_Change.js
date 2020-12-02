/**
 * You are given coins of different denominations and a total amount of money amount. 
 * Write a function to compute the fewest number of coins that you need to make up that amount. 
 * If that amount of money cannot be made up by any combination of the coins, return -1.

  You may assume that you have an infinite number of each kind of coin.

  Example 1:
    Input: coins = [1,2,5], amount = 11
    Output: 3
    Explanation: 11 = 5 + 5 + 1

  Example 2:
    Input: coins = [2], amount = 3
    Output: -1

  Example 3:
    Input: coins = [1], amount = 0
    Output: 0

  Example 4:
    Input: coins = [1], amount = 1
    Output: 1

  Example 5:
    Input: coins = [1], amount = 2
    Output: 2
   
  Constraints:
    1 <= coins.length <= 12
    1 <= coins[i] <= 231 - 1
    0 <= amount <= 104

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/coin-change
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  /**
   * 1. 备忘录
   */
  /*  let subResultMap = {};
   function cal(amount) {
     if (subResultMap[amount] !== undefined) {
       return subResultMap[amount];
     }
     if (amount === 0) {
       return 0;
     }
     if (amount < 0) {
       return -1;
     }
     let result = Infinity;
     for (let coin of coins) {
       const subResult = cal(amount - coin);
       if (subResult === -1) {
         continue
       }
       result = Math.min(result, 1 + subResult)
     }
     subResultMap[amount] = result == Infinity ? -1 : result;
     return subResultMap[amount];
   }
   return cal(amount); */

  /**
   * 从下至上
   */
  /* // dp 数组的定义：当目标金额为 i 时，至少需要 dp[i] 枚硬币凑出
  // dp 数组初始化为 amount + 1 , 因为凑成 amount 金额的硬币数最多只可能等于 amount（全用 1 元面值的硬币），
  // 所以初始化为 amount + 1 就相当于初始化为正无穷，便于后续取最小值
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  // 外层 for 循环在遍历所有状态的所有取值
  for (let i = 0; i < dp.length; i++) {
    // 内层 for 循环在求所有选择的最小值
    for (let coin of coins) {
      // 子问题无解
      if (i - coin < 0) {
        continue;
      }
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  // 等于初始值
  return dp[amount] === amount + 1 ? -1 : dp[amount]; */

  /**
   * 基础二维动态规划
   */
  // if (amount === 0) return 0;
  // // 初始化dp表，默认值为极大值，代表无解
  // var dp = new Array(coins.length).fill(0).map((item) => {
  //   return new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  // });

  // // amount=0，则只需要0个硬币即可满足条件，注意这是有解不是无解
  // dp[0][0] = 0;
  // for (let i = 1; i <= amount; i++) { // 初始化第一层：只用第一种货币，amount∈[0, targetAmount]分别对应的最优组合
  //   if (i % coins[0] === 0) {   // 因为只有一种货币，所以只有能整除的情况才有解
  //     dp[0][i] = i / coins[0];
  //   }
  // }

  // for (let i = 1; i < coins.length; i++) {    // 从第二层开始依次填表
  //   for (let j = 0; j <= amount; j++) {     // 穷举amount的可能性，固定模板
  //     dp[i][j] = dp[i - 1][j];          // 先从上一层复制一个可能的解，即不选用用新面额的硬币，光靠之前的面额所需要的硬币最小数量。此值可能为极大值，即代表无解
  //     if (j >= coins[i]) {            // 如果当前amount比新可选硬币的面额小，没有意义。因为货币没面额太大无法选用，故此时解必然等于之前复制的值，直接跳过
  //       dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i]] + 1);   // 否则，选用1个当前硬币面额，硬币总数量+1。把此新值和之前复制的值比较，看哪个更小，即更优解
  //       /*** 
  //        * 注意这里可能会疑问，如果选用2个当前面额的硬币呢？其实，因为你是顺序填表的，dp[i][j-coins[i]*2]的情况已经计算过了，如果可行，此处+1已经计算在内了
  //        * 换句话说，这里的Math.min方法第一次选择后者为答案时，必然是最多只能选择一个当前面额硬币的情况。
  //        * 个人在这里想了好一会儿才搞懂，写下来留个记录，也希望能帮助和我有同样困惑的人理解
  //        * 多吐槽一句，背包题也刷了好几题了，还是每次都想不明白啊 
  //       ***/
  //     }
  //   }
  // }

  // if (dp[coins.length - 1][amount] !== Number.MAX_SAFE_INTEGER) {   // 查表，如果不是极大值所代表的的无解，则输出该值，否则输出-1；
  //   return dp[coins.length - 1][amount];
  // }
  // else {
  //   return -1;
  // }
};

console.log(coinChange([1, 2, 5], 11));
