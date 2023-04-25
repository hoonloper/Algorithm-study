/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const obj = edges.reduce((acc, [a, b]) => {
    if (acc[a]) {
      acc[a] += 1;
    } else {
      acc[a] = 1;
    }
    if (acc[b]) {
      acc[b] += 1;
    } else {
      acc[b] = 1;
    }
    return acc;
  }, {});
  let max = 0;
  let answer;
  Object.keys(obj).forEach((key) => {
    if (obj[key] > max) {
      max = obj[key];
      answer = key;
    }
  });
  return answer;
};
