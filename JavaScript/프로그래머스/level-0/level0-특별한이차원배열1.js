function solution(n) {
  const answer = Array.from({ length: n }, () => Array(n).fill(0));
  return answer.map((el, i) => {
    el[i] = 1;
    return el;
  });
}
