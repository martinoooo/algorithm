/**
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
  Given an integer n, return all distinct solutions to the n-queens puzzle.
  Each solution contains a distinct board configuration of the n-queens' placement,
  where 'Q' and '.' both indicate a queen and an empty space, respectively.



  Example 1:
    Input: n = 4
    Output: [
      [ ".Q..",
        "...Q",
        "Q...",
        "..Q."
      ],
      [ "..Q.",
        "Q...",
        "...Q",
        ".Q.."
      ]
    ]
    Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

  Example 2:
    Input: n = 1
    Output: [["Q"]]


  Constraints:
    1 <= n <= 9


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/n-queens
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {number} n
* @return {string[][]}
*/
var solveNQueens = function (n) {
  const result = [];

  const arr = new Array(n).fill('.').map(x => new Array(n).fill('.'))
  dfs(arr, 0);
  return result;

  function dfs(board, row) {
    if (board.length === row) {
      const stringsBoard = board.slice(); // 拷贝一份board
      for (let i = 0; i < board.length; i++) {
        stringsBoard[i] = stringsBoard[i].join(''); // 将每一行拼成字符串
      }
      result.push(stringsBoard); // 推入res数组
      return;
    }
    const n = board[row].length;
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue;
      }
      board[row][col] = 'Q';
      dfs(board, row + 1);
      board[row][col] = '.';
    }
  }

  function isValid(board, row, col) {
    const n = board.length;
    // 检查列是否有皇后互相冲突
    for (let i = 0; i < n; i++) {
      if (board[i][col] == 'Q')
        return false;
    }
    // 检查右上方是否有皇后互相冲突
    for (let i = row - 1, j = col + 1;
      i >= 0 && j < n; i--, j++) {
      if (board[i][j] == 'Q')
        return false;
    }
    // 检查左上方是否有皇后互相冲突
    for (let i = row - 1, j = col - 1;
      i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == 'Q')
        return false;
    }
    return true;
  }
};

console.log(solveNQueens(4))