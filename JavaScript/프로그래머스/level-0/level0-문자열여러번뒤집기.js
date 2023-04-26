function solution(my_string, queries) {
  return queries.reduce((acc, [s, e]) => {
    const start = acc.slice(0, s);
    const mid = acc
      .slice(s, e + 1)
      .split('')
      .reverse()
      .join('');
    const end = acc.slice(e + 1);
    return start + mid + end;
  }, my_string);
}
