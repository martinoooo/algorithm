// shellSort 希尔排序
// 希尔排序的原理是首先定义一个gap
// 然后从这个gap开始，依次与之前相差gap个位的数字进行比较，进行交换

// 比如说length为10的数组，gap计算为5，则是i=5开始，与i=0的数字进行比较，然后再减一个gap时,i<0,进入下一个循环
// 此时i=6，与i=1的数字进行比较，依次类推到i=9;

// 接着gap计算为2，则从i=2开始，与i=0进行比较
// 然后i+1，i=3，与i=1进行比较。依次类推到i=9;
// 然后i+1，i=4，与i=2进行比较。因为i=2和i=0的位子上面的值已经是一个有序的数列了，所以如果i=4的值大于i=2的，则直接
// 跳出，i+1进入下一个循环。如果小于i=2的值，则还需要比较i=0上面的值。依次类推到i=9;

// 最后gap计算为1，进行最后一次循环比较

function shell(arr) {
    const len = arr.length;
    let gap = Math.floor(len / 2);
  
    while (gap > 0) {
      for (let i = gap; i < len; i++) {
        const temp = arr[i];
        let preIndex = i - gap;
  
        while (arr[preIndex] > temp) {
          arr[preIndex + gap] = arr[preIndex];
          preIndex -= gap;
        }
        arr[preIndex + gap] = temp;
      }
      gap = Math.floor(gap / 2);
    }

    return arr;
}

var arr = [3,2,1,5,3,6,4,3,8,3];
shell(arr);
console.log(arr);