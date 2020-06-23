/**
    Given two binary strings, return their sum (also a binary string).

    The input strings are both non-empty and contains only characters 1 or 0.

    Example 1:

    Input: a = "11", b = "1"
    Output: "100"
    Example 2:

    Input: a = "1010", b = "1011"
    Output: "10101"
     

    Constraints:

    Each string consists only of '0' or '1' characters.
    1 <= a.length, b.length <= 10^4
    Each string is either "0" or doesn't contain any leading zero.
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// My
var addBinary = function (a, b) {
  let result = "";
  let extra = 0;
  while (a || b || extra) {
    const alasti = a.length - 1;
    const blasti = b.length - 1;
    const alastw = Number(a[alasti] || 0);
    const blastw = Number(b[blasti] || 0);
    if (alastw + blastw + extra === 2) {
      result = "0" + result;
      extra = 1;
    } else if (alastw + blastw + extra === 3) {
      result = "1" + result;
      extra = 1;
    } else {
      result = String(alastw + blastw + extra) + result;
      extra = 0;
    }
    a = a.substring(0, alasti);
    b = b.substring(0, blasti);
  }

  return result;
};

// Theirs
var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

// console.log(addBinary("11", "1"));
// console.log(addBinary("1010", "1011"));
console.log(addBinary("1111", "1111"));
