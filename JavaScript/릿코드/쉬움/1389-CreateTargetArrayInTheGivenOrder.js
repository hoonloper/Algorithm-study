/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const arr = [];
  nums.forEach((num, i) => {
    arr.splice(index[i], 0, num);
  });
  return arr;
};
