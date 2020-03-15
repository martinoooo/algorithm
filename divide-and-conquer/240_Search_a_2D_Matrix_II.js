/**
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

    每行的元素从左到右升序排列。
    每列的元素从上到下升序排列。
    示例:

    现有矩阵 matrix 如下：

    [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
    ]
    给定 target = 5，返回 true。

    给定 target = 20，返回 false。
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// best solution
var searchMatrix = function(matrix, target) {
  if (!matrix || !target || matrix.length === 0) return false;
  let col = 0;
  let row = matrix.length - 1;
  while (row >= 0 && col < matrix[0].length) {
    if (target > matrix[row][col]) {
      col++;
    } else if (target < matrix[row][col]) {
      row--;
    } else {
      return true;
    }
  }
  return false;
};

// My bad solution
// var searchMatrix = function(matrix, target) {
//   if (matrix.length === 0) return false;
//   let result = false;
//   find(0, 0, matrix[0].length - 1, matrix.length - 1);
//   return result;

//   function find(p1_x, p1_y, p2_x, p2_y) {
//     if (p1_x > p2_x || p1_y > p2_y) {
//       return false;
//     }

//     if (p1_x === p2_x && p1_y === p2_y) {
//       if (matrix[p1_y][p1_x] == target) {
//         result = true;
//       }
//       return;
//     }

//     const x_mid = Math.floor((p1_x + p2_x) / 2);
//     const y_mid = Math.floor((p1_y + p2_y) / 2);
//     if (matrix[y_mid][x_mid] === target) {
//       result = true;
//       return;
//     } else if (matrix[y_mid][x_mid] > target) {
//       find(p1_x, p1_y, x_mid, y_mid);
//       find(x_mid + 1, p1_y, p2_x, y_mid);
//       find(p1_x, y_mid + 1, x_mid, p2_y);
//     } else {
//       find(x_mid + 1, p1_y, p2_x, y_mid);
//       find(p1_x, y_mid + 1, x_mid, p2_y);
//       find(x_mid + 1, y_mid + 1, p2_x, p2_y);
//     }
//   }
// };

const arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
console.log(searchMatrix(arr, 5));
console.log(searchMatrix(arr, 20));
console.log(searchMatrix([[-1, 3]], -1));
