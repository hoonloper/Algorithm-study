function solution(n) {
  return n % 2
    ? Array.from({ length: n }, (_, i) => i + 1).reduce(
        (acc, cur) => (cur % 2 ? acc + cur : acc),
        0
      )
    : Array.from({ length: n }, (_, i) => i + 1).reduce(
        (acc, cur) => (cur % 2 === 0 ? acc + (cur, cur ** 2) : acc),
        0
      );
}
