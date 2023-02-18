/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const arr = [];
  for (let i = 1; i <= nums.length; i += 2) {
    const [freq, val] = [nums[i - 1], nums[i]];
    for (let j = 0; j < freq; j++) {
      arr.push(val);
    }
  }
  return arr;
};
