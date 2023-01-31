function solution(number, arr) {
  const answer = [];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - max > 0) {
      answer.push(answer[i]);
      max = arr[i];
    }
  }

  return answer.length;
}

solution(8, [130, 135, 148, 140, 145, 150, 150, 153]);
