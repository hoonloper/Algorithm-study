function solution(my_string, s, e) {
  const f = my_string.slice(0, s);
  const mid = my_string
    .slice(s, e + 1)
    .split('')
    .reverse()
    .join('');
  const l = my_string.slice(e + 1);
  return f + mid + l;
}
