/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  return [(celsius + 273.15).toFixed(5), ((celsius * 9) / 5 + 32).toFixed(5)];
};
