function solution(t, p) {
  let answer = 0;
  let end = p.length;
  for (let i = 0; i <= t.length - p.length; i++) {
    if (+p >= +t.slice(i, end++)) {
      answer++;
    }
  }
  return answer;
}
