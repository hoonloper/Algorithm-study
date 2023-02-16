/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  num = num
    .toString()
    .split('')
    .map((el) => +el)
    .sort((a, b) => a - b);
  return +(num[0] + '' + num[2]) + +(num[1] + '' + num[3]);
};
