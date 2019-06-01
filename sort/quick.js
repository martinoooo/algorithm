// quickSort 快速排序
// 采用分而治之的思想。
// 取一个基准数，将数组一分为2，然后对与左右两个数组依次进行相同的操作，然后连接起来。

// 与归并排序的不同点是，快速排序能保证左右两边都是排好序且右边大于左边的。而归并排序并不能保证右边一定都是大于左边的，而只能
// 保证各自的数组是排好序的

//  时间复杂度 O(n·log(n)) 不稳定
function quick(arr) {
    const pivot = arr[0];
    const left = [];
    const right = [];
    
    if (arr.length < 2) { return arr; }
  
    for (let i = 1, len = arr.length; i < len; i++) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
  
    return quick(left).concat([pivot], quick(right));
}

var arr = [3,2,1,5,3];
console.log(quick(arr));