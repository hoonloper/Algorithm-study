function solution(arr) {
  const answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (const x of arr) {
    if (x % 2) {
      sum += x;
      if (x < min) min = x;
    }
  }

  answer.push(sum, min);

  return answer;
}

solution([12, 77, 38, 41, 53, 92, 85]);
solution([32, 15, 125]);
