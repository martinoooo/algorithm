// countSort 计数排序
// 统计数组中每个值为 i 的元素出现的次数，存入数组 C 的第 i 项
// 对每一个C(i)项都push进新数组，每放一个元素就将C(i)减去1

// 当输入的元素是 n个 0 到 k 之间的整数时, 时间复杂度 O(n+k) 空间复杂度 O(n+k); 稳定
// 计数排序不是比较排序，排序的速度快于任何比较排序算法。
// 计数排序是用来排序 0 到 100 之间的数字的最好的算法，但是它不适合按字母顺序排序人名

function countSort(arr) {
    const C = [];
    for (let i = 0; i <  arr.length; i++) {
      const j = arr[i];
      C[j] >= 1 ? C[j] ++ : (C[j] = 1);
    }
    const D = [];
    for (let j = 0; j < C.length; j++) {
      if(C[j]) {
        while(C[j] > 0) {
          D.push(j);
          C[j]--;
        }
      }
    }
    return D;
}

var arr = [3,2,1,5,3];
console.log(countSort(arr));