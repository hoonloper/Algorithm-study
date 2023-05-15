function solution(my_string, m, c) {
  const arr = [];
  for (let i = 0; i < my_string.length; i += m) {
    arr.push(my_string.slice(i, i + m));
  }
  return arr.reduce((acc, cur) => acc + cur[c - 1], '');
}
