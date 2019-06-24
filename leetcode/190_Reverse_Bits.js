/* 
    Reverse bits of a given 32 bits unsigned integer.

    Example 1:
        Input: 00000010100101000001111010011100
        Output: 00111001011110000010100101000000
        Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596,
        so return 964176192 which its binary representation is 00111001011110000010100101000000.
    
    Example 2:
        Input: 11111111111111111111111111111101
        Output: 10111111111111111111111111111111
        Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, 
        so return 3221225471 which its binary representation is 10101111110010110010011101101001.
        

    Note:
        Note that in some languages such as Java, there is no unsigned integer type. 
        In this case, both input and output will be given as signed integer type and should not affect 
        your implementation, as the internal binary representation of the integer is the same whether 
        it is signed or unsigned.
        In Java, the compiler represents the signed integers using 2's complement notation. 
        Therefore, in Example 2 above the input represents the signed integer -3 and the output 
        represents the signed integer -1073741825.
        

    Follow up:
        If this function is called many times, how would you optimize it? 
*/

// their_code
//  可以用任何数字和1进行位运算的结果都取决于该数字最后一位的特性简化操作和提高性能
//  eg :
//    n & 1 === 1, 说明n的最后一位是1
//    n & 1 === 0, 说明n的最后一位是0

//  对于JS，ES规范在之前很多版本都是没有无符号整形的， 转化为无符号，可以用一个trickn >>> 0

// 双"指针" 模型

// bit 运算
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) + (n & 1);
    n = n >>> 1;
  }

  return res >>> 0;
};

console.log(reverseBits(43261596));
console.log(reverseBits(4294967293));
