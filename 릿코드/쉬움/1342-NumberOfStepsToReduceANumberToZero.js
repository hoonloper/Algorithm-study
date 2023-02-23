/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  while (num) {
    count++;
    num = num % 2 === 1 ? --num : Math.floor(num / 2);
  }
  return count;
};
