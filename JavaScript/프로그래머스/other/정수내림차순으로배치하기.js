function solution(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => a - b)
    .reverse()
    .join("");
}
