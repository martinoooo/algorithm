/* 
    Given an array of integers that is already sorted in ascending order, 
    find two numbers such that they add up to a specific target number.

    The function twoSum should return indices of the two numbers such that 
    they add up to the target, where index1 must be less than index2.

    Note:
        Your returned answers (both index1 and index2) are not zero-based.
        You may assume that each input would have exactly one solution and you may not use the same element twice.
    
    Example:
        Input: numbers = [2,7,11,15], target = 9
        Output: [1,2]
        Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

// my_code
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const len = numbers.length;
  for (let i = 0; i < len; i++) {
    if (numbers[i] > target) {
      return null;
    }
    console.log(23423);
    for (let j = i + 1; j < len; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      } else if (numbers[i] + numbers[j] > target) {
        break;
      }
    }
  }
  return null;
};

// other_code
// 双指针。一个left指针，一个right指针， 如果left + right 值 大于target 则 right左移动， 否则left右
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (numbers[i] + numbers[j] !== target) {
    numbers[i] + numbers[j] < target ? i++ : j--;
  }

  return [i + 1, j + 1];
};

console.log(twoSum([-1, 0], -1));
