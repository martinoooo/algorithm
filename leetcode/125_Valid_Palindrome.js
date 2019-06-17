/* 
    Given a string, determine if it is a palindrome, 
    considering only alphanumeric characters and ignoring cases.

    Note: For the purpose of this problem, we define empty string as valid palindrome.

    Example 1:
        Input: "A man, a plan, a canal: Panama"
        Output: true

    Example 2:
        Input: "race a car"
        Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  function isValid(c) {
    const charCode = c.charCodeAt(0);
    const isDigit =
      charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0);
    const isChar =
      charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0);

    return isDigit || isChar;
  }

  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isValid(s[left])) {
      left++;
      continue;
    }
    if (!isValid(s[right])) {
      right--;
      continue;
    }

    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }

  return right <= left;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
