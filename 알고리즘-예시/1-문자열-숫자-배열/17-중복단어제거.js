function solution(arr) {
  let answer;

  answer = arr.filter((el, idx) => arr.indexOf(el) === idx);

  return answer;
}

solution(['good', 'time', 'good', 'time', 'student']);
