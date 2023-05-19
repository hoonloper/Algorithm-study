function solution(myString) {
  let answer = '';
  for (const s of myString) {
    answer += s.charCodeAt() < 'l'.charCodeAt() ? 'l' : s;
  }
  return answer;
}
