function solution(n, t, m, p) {
  const max = (t - 1) * m + p;
  let str = '';
  let count = 0;
  let answer = '';
  while (str.length < max) {
    str += count.toString(n);
    count++;
  }
  for (let i = p - 1; i < max; i += m) {
    answer += str[i];
  }
  return answer.toUpperCase();
}
