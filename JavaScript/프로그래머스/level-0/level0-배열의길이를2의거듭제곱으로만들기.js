function solution(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let x = 2;
  while (arr.length > x) {
    x *= 2;
  }
  return arr.concat(Array(x - arr.length).fill(0));
}
