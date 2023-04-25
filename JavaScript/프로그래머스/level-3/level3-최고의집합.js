function solution(n, s) {
  let remain = s % n;
  const q = Math.floor(s / n);
  if (s < n) return [-1];
  const answer = new Array(n).fill(q);

  while (remain > 0) {
    answer[remain]++;
    remain--;
  }

  return answer.sort();
}
