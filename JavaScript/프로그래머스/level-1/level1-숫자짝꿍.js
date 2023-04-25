function solution(X, Y) {
  X = X.split('');
  Y = Y.split('');
  const answer = [];
  let cX = Array.from({ length: 10 }, () => 0);
  let cY = Array.from({ length: 10 }, () => 0);

  X.forEach((item) => {
    cX[item]++;
  });
  Y.forEach((item) => {
    cY[item]++;
  });

  cX.forEach((item, index) => {
    if (item !== 0 && cY[index] !== 0) {
      const min = Math.min(item, cY[index]);

      answer.push(String(index).repeat(min));
    }
  });

  if (answer.length === 0) {
    return '-1';
  }

  if (Number(answer.join('')) === 0) {
    return '0';
  }

  return answer.reverse().join('');
}
