function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// 처음 푼 코드
function solution(numlist, n) {
  return numlist
    .map((el) => [el, Math.abs(el - n)])
    .sort((a, b) => (a[1] - b[1] === 0 ? b[0] - a[0] : a[1] - b[1]))
    .map((el) => el[0]);
}
