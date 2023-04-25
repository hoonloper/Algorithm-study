function solution(number, a, b) {
  const answer = [];

  for (let i = 0; i < number; i++) {
    if (a[i]) answer.push(b[i]);
  }

  return answer.reduce((acc, score) => acc + score);
}

solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0], [1, 0, 1, 2, 3, 0, 0, 1, 2, 0]);
