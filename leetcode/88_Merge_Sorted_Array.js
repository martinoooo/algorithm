/* 
    Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

    Note:
        The number of elements initialized in nums1 and nums2 are m and n respectively.
        You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
    
    Example:
        Input:
            nums1 = [1,2,3,0,0,0], m = 3
            nums2 = [2,5,6],       n = 3
        Output: [1,2,2,3,5,6]
*/

// my code
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length);
  nums2.splice(n, nums2.length);
  let i = 0;
  let j = 0;
  while (i < m + n && j < n) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      nums1.splice(i, 0, nums2[j]);
      j++;
      i++;
    }
  }
  nums2.splice(0, j);
  nums1.push(...nums2);
};

let a = [4, 0, 0, 0, 0, 0];
merge(a, 1, [5, 5, 5, 5, 5], 5);
console.log(a);

// bset code
// 从后往前比较，并从后往前插入
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function(nums1, m, nums2, n) {
  var k = m + n - 1;
  m--;
  n--;

  while (m >= 0 && n >= 0) {
    nums1[k] = Math.max(nums1[m], nums2[n]);

    nums1[k] == nums1[m] ? m-- : n--;
    k--;
  }

  while (m >= 0) nums1[k--] = nums1[m--];
  while (n >= 0) nums1[k--] = nums2[n--];
};
