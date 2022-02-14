// for문을 이용
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) answer -= absolutes[i];
    else answer += absolutes[i];
  }

  return answer;
}

// reduce를 이용
function solution(absolutes, signs) {
  return absolutes.reduce((acc, el, i) => acc + el * (signs[i] ? 1 : -1), 0);
}
