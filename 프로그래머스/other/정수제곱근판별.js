function solution(n) {
  const answer = Math.sqrt(n);

  return Number.isInteger(answer) ? (answer + 1) ** 2 : -1;
}

console.log(solution(121));
