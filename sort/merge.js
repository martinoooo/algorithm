// mergeSort 归并排序
// 将数组一分为2，左右两边又在一份为2，直到数组的长度为1为止。
// 对于左右两个数组，我们对比两个数组的值，依次push进一个长的数组里，
// 因为一次次的分割和一次次的组合，所以左右两个数组在进行比较的时候实际上是已经排好序了的

// 时间复杂度 O(n·log(n)) 稳定
function mergeSort(arr) {
    const len = arr.length;

    if (len < 2) { return arr; }

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
        }else{
            result.push(right.shift());
        }
    }

    return result.concat(left, right);
}

var arr = [3,2,1,5,3];
console.log(mergeSort(arr));