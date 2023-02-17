/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  return nums.map((num1) => nums.filter((num2) => num1 > num2).length);
};
