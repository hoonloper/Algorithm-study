/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let lt = 0;
  let rt = nums.length - 1;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return lt;
};
