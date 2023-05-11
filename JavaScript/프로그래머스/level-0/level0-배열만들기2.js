function solution(l, r) {
  const answer = [];
  const reg = new RegExp('5|0', 'g');
  for (let i = l; i <= r; i++) {
    const str = ('' + i).replace(reg, '');
    if (!str.length) {
      answer.push(i);
    }
  }
  if (!answer.length) {
    answer.push(-1);
  }
  return answer;
}
