var mergeSort = function(nums) {
  if (nums.length < 2) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = nums.splice(0, mid);
  const right = nums;

  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
console.log(mergeSort([3, 4, 1, 5, 8, 2, 4]));
