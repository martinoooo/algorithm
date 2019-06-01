// 先将所有的数据堆化
// 然后移动 arr[0] 到数组末尾（已排序区域）
// 再重新堆化，依次这样循环来排序。

// 堆节点的访问
// 通常堆是通过一维数组来实现的。在数组起始位置为0的情形中：
// 父节点i的左子节点在位置 (2i+1);
// 父节点i的右子节点在位置 (2i+2);
// 子节点i的父节点在位置 floor((i-1)/2);

// 堆排序的平均时间复杂度为 O(n·log(n))，空间复杂度为 O(1)
function heapSort(arr) {
    let len = arr.length;
  
    // 初始化堆，i 从最后一个父节点开始调整（获取最后一个父节点的位置：Math.floor(size / 2) - 1），直到节点均调整完毕 
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(i, len);
    }
    // 堆初始化之后，此时的结构是最顶上的元素是最大的，然后每一个父子结构中父都大于子
    // 堆排序：先将第一个元素和已拍好元素前一位作交换，然后去掉最后一个数，再重新调整堆，直到排序完毕
    for (let i = len - 1; i > 0; i--) {
      swap(0, i);
      heapify(0, i);
    }
  
    return arr;

    function heapify(start, end) {
		let dad = start;
		let son = dad * 2 + 1; // 获取子节点左边的位置
		if (son >= end) { // 若子节点位置超过范围直接跳出函数
            return;
        }
		if (son + 1 < end && arr[son] < arr[son + 1]) { // 先比较两个子节点大小，选择最大的
            son++;
        }
		if (arr[dad] <= arr[son]) { //如果父节点小于子节点时
			swap(dad, son); // 交换父子内容
			heapify(son, end); // 再继续子节点和孙节点比较
		}
	}

    function swap(i, j) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}

var arr = [3,2,1,5,3];
console.log(heapSort(arr));