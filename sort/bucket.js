// bucketSort 桶排序
// 桶排序是计数排序的升级版

// 1.设置一个定量的数组当作空桶子。
// 2.遍历输入数据，并且把数据一个一个放到对应的桶里去；然后对这个桶进行排序
// 3.从不是空的桶子里把项目再放回原来的序列中。

// 当输入的元素是 n个 0 到 k 之间的整数时, 时间复杂度 O(n+k); 稳定

function bucketSort(arr, num) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const buckets = [];
    const bucketsSize = Math.floor((max - min) / num) + 1;

    for(let i = 0; i < arr.length; i++) {
        const index = ~~(arr[i] / bucketsSize); //  ~~ 来截除数字值的小数部分
        !buckets[index] && (buckets[index] = []);
        buckets[index].push(arr[i]);
        let l = buckets[index].length;
        while(l > 0) {
            buckets[index][l] < buckets[index][l - 1] && swap(buckets[index], l, l - 1);
            l--;
        }
    }
    let wrapBuckets = [];
    for(let i = 0; i < buckets.length; i++) {
        buckets[i] && (wrapBuckets = wrapBuckets.concat(buckets[i]))
    }
    return wrapBuckets;

    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

const arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100]
console.log(bucketSort(arr, 10))