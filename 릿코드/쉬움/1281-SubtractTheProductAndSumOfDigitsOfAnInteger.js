/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  n = n.toString().split('');
  const product = n.reduce((acc, el) => acc * +el, 1);
  const sum = n.reduce((acc, el) => acc + +el, 0);
  return product - sum;
};
