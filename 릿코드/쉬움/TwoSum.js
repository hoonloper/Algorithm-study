/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length;
  const answer = [];
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) {
        answer.push(i, j);
      }
    }
  }
  return answer;
};
