function solution(n) {
  const binN = n.toString(2);
  let sum = n + 1;
  const answer = [];
  while (true) {
    const binNLen = binN.split('').filter((el) => +el).length;
    const sumLen = sum
      .toString(2)
      .split('')
      .filter((el) => +el).length;
    if (binNLen === sumLen) {
      answer.push(sum);
      break;
    }
    sum += 1;
  }

  return answer.pop();
}
