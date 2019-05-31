// selection 选择排序
// 选择排序的原理是从第1个数字开始，开始遍历，获取这个数之后最小的值的位置，一趟下来之后交换两个值
// 然后再从第2个数字开始，开始遍历，交换最小的值，这样每一轮下来都是最小的值与开始的那个值交换
// 然后最后两个值的时候，也只需要比较一次就可以了，所以只需要循环n-1次就行

// 时间复杂度 n^2
function selection(arr) {
    const length = arr.length;
    let minIndex, temp;
    for (let i = 0; i < length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {   
                minIndex = j;            
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

var arr = [3,2,1,5,3];
selection(arr);
console.log(arr);