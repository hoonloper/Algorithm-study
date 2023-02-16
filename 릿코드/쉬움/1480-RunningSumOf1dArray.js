/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const pSum = Array.from({ length: nums.length + 1 }, () => 0);
  for (let i = 1; i <= nums.length; i++) {
    pSum[i] = pSum[i - 1] + nums[i - 1];
  }
  pSum.shift();
  return pSum;
};
