function solution(s) {
  const answer = [];
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.includes(s[i])) {
      answer.push(i - stack.lastIndexOf(s[i]));
    } else {
      answer.push(-1);
    }
    stack.push(s[i]);
  }

  return answer;
}
