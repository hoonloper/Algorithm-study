function solution(myStr) {
  const ans = myStr
    .replace(/a|b|c/g, '.')
    .split('.')
    .filter((el) => el);
  return ans.length ? ans : ['EMPTY'];
}
