function binarySearch (arr, val) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        var mid = parseInt( (low + high) / 2 );
        if (val == arr[mid]) {
            return mid;
        } else if (val > arr[mid]) {
            low = mid + 1;
        } else if (val < arr[mid]) {
            high = mid - 1;
        }
    }
    return -1;
};  

var arr = [1, 3, 5, 7, 9, 10, 11, 12, 14, 15, 19, 20];
console.log(binarySearch(arr, 14) );