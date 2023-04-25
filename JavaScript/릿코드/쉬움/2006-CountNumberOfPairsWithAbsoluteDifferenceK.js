/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  return nums.reduce((acc, el, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(el - nums[j]) === k) {
        acc += 1;
      }
    }
    return acc;
  }, 0);
};
