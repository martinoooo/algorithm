// bubbleSort 冒泡排序
// 对于n的数组，只循环 n-1 次
// 冒泡顺序的原理是从第一个数字开始，两两对比，如果第一个值较大就交换，这样一轮下来最后一个值就是最大的
// 然后再从第一个数字开始重复比较，这时候最后一个值就不需要比较了，这样每一轮下来最后一个值都是最大的
// 然后最后两个值的时候，也只需要比较一次就可以了，所以只需要循环n-1次就行

// 时间复杂度 n2
function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j= 0; j < length - 1 - i;j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

var arr = [3,2,1,5,3];
bubbleSort(arr);
console.log(arr);