function solution(arr) {
  let answer;
  max = Number.MIN_SAFE_INTEGER;

  for (const x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

solution(['5', 'teacher', 'time', 'student', 'beautiful', 'good']);
