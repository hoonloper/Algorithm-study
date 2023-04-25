/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  if (nums.length <= 2) {
    return true;
  }
  for (let i = 0; i < nums.length; i++) {
    let flag = true;
    const filteredNums = [...nums];
    filteredNums.splice(i, 1);
    for (let j = 1; j < filteredNums.length; j++) {
      if (filteredNums[j - 1] < filteredNums[j]) {
        continue;
      }
      flag = false;
      break;
    }
    if (flag) {
      return true;
    }
  }
  return false;
};
