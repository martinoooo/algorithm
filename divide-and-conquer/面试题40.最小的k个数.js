/**
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。 

    示例 1：

    输入：arr = [3,2,1], k = 2
    输出：[1,2] 或者 [2,1]
    示例 2：

    输入：arr = [0,1,2,1], k = 1
    输出：[0]
     

    限制：

    0 <= k <= arr.length <= 10000
    0 <= arr[i] <= 10000
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  if (k > arr.length) return arr;
  if (k === 0) return [];
  return mergeSort(arr).slice(0, k);

  function mergeSort(arr) {
    const len = arr.length;

    if (len < 2) {
      return arr;
    }

    const mid = Math.floor(len / 2);
    const left = arr.splice(0, mid);
    const right = arr;

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    const result = [];

    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    return result.concat(left, right);
  }
};

console.log(getLeastNumbers([3, 2, 1], 2));
console.log(getLeastNumbers([0, 1, 2, 1], 1));
