/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  const sum = nums.reduce((acc, el) => acc + el, 0);
  const xSum = nums
    .join('')
    .split('')
    .reduce((acc, el) => acc + +el, 0);
  return sum - xSum;
};
