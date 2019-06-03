// radixSort 基数排序

// 1. 取得数组中的最大数，并取得位数；
// 2. 先是个位数开始，对数组进行排序
// 3. 接下来是十位数开始，开始对数组进行排序
// 4. 接下来位数乘以10， 直到最到位对数组进行排序

// 时间复杂度 O(k*n)，其中 n是排序元素个数，k是数字位数， 稳定 

function radixSort(arr) {
    const max = Math.max(...arr);
    let digit = `${max}`.length;
    let start = 1;
    let buckets = [];
    while(digit > 0) {
      start *= 10;
      for(let i = 0; i < arr.length; i++) {
        const index = arr[i] % start;
        !buckets[index] && (buckets[index] = []);
        buckets[index].push(arr[i]);
      }
      arr = [];
      for(let i = 0; i < buckets.length; i++) {
        buckets[i] && (arr = arr.concat(buckets[i]))
      }
      buckets = [];
      digit --;
    }
    return arr;
}

const arr = [1, 10, 100, 1000, 98, 67, 3, 28, 67, 888, 777]
console.log(radixSort(arr))