/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  const leftSum = nums.reduce((arr, cur, i) => {
    if (!arr.length) {
      arr.push(0);
    } else {
      arr.push(arr[i - 1] + nums[i - 1]);
    }
    return arr;
  }, []);
  const rightSum = nums.reduce((arr, cur, i) => {
    const len = arr.length;
    if (!len) {
      arr.push(0);
    } else {
      arr.unshift(nums[nums.length - len] + arr[0]);
    }
    return arr;
  }, []);
  return leftSum.map((el, i) => Math.abs(el - rightSum[i]));
};
