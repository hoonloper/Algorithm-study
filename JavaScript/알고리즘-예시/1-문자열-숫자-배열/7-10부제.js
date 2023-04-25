function solution(day, arr) {
  let answer = 0;

  for (const num of arr) {
    if (num % 10 === day) answer += 1;
  }

  return answer;
}

solution(3, [25, 23, 11, 47, 53, 17, 33]);
solution(3, [32, 15, 125]);
