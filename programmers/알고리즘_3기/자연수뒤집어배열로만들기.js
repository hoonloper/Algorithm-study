function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((n) => (n = parseInt(n)));
}

console.log(solution(12345));
