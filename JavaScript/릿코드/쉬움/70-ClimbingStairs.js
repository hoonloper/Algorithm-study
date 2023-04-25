/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const arr = [1, 1];
  const fibo = (x) => {
    if (arr[x] !== undefined) {
      return arr[x];
    }
    arr[x] = fibo(x - 1) + fibo(x - 2);
    return arr[x];
  };
  return fibo(n);
};
