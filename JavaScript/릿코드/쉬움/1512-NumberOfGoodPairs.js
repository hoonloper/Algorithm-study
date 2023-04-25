/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  return nums.reduce((acc, el, idx) => {
    for (let i = idx; i < nums.length; i++) {
      if (idx !== i && el === nums[i]) {
        acc++;
      }
    }
    return acc;
  }, 0);
};
