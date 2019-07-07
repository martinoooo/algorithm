/* 
    Given an integer array with even length, where different numbers in this array represent different 
    kinds of candies. Each number means one candy of the corresponding kind. 
    You need to distribute these candies equally in number to brother and sister. 
    Return the maximum number of kinds of candies the sister could gain.
    
    Example 1:
        Input: candies = [1,1,2,2,3,3]
        Output: 3
    
        Explanation:
            There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
            Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too. 
            The sister has three different kinds of candies. 
    
    Example 2:
        Input: candies = [1,1,2,3]
        Output: 2

        Explanation: 
            For example, the sister has candies [2,3] and the brother has candies [1,1]. 
            The sister has two different kinds of candies, the brother has only one kind of candies. 
            
    Note:
        The length of the given array is in range [2, 10,000], and will be even.
        The number in given array is in range [-100,000, 100,000]. 
*/

// 如果糖果种类大于n / 2（糖果种类数为n），妹妹最多可以获得的糖果种类应该是n / 2(因为妹妹只有n / 2个糖).
// 糖果种类数小于n / 2, 妹妹能够得到的糖果种类可以是糖果的种类数（糖果种类本身就这么多）.
var distributeCandies = function(candies) {
  const count = new Set(candies);
  return Math.min(count.size, candies.length >> 1); // 右移一位相当于除2，右移n位相当于除以2的n次方。
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
