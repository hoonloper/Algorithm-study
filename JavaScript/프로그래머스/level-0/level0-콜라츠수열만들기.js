function solution(n) {
  const arr = [];
  while (n !== 1) {
    arr.push(n);
    n = n % 2 ? 3 * n + 1 : n / 2;
  }
  arr.push(1);
  return arr;
}
