// insertion 插入排序
// 插入排序的原理是从第2个数字开始，与该数之前的数字相比较，如果小于某数，就将该数插入到这个数的前面。
// 然后再从第3个数字开始，重复与该数之前的数字相比较。这样数字的前面就是一个顺序排列的数组。

// 时间复杂度 n^2
function insertion(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    const temp = arr[i];
    let preIndex = i - 1;

    while (arr[preIndex] > temp) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex -= 1;
    }
    arr[preIndex + 1] = temp;
  }
  return arr;
}

var arr = [3, 2, 1, 5, 3];
insertion(arr);
console.log(arr);
