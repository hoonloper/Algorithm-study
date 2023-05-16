function solution(numLog) {
  const equal = (n, t) => n === t;
  let answer = '';
  for (let i = 0; i < numLog.length - 1; i++) {
    const [num, t] = [numLog[i], numLog[i + 1]];
    answer += equal(num + 1, t)
      ? 'w'
      : equal(num + 10, t)
      ? 'd'
      : equal(num - 1, t)
      ? 's'
      : 'a';
  }
  return answer;
}
