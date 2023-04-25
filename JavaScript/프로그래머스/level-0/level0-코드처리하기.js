function solution(code) {
  let mode = false;
  let answer = '';
  for (let i = 0; i < code.length; i++) {
    if (!mode) {
      if (code[i] !== '1') {
        if (i % 2 === 0) {
          answer += code[i];
        }
      } else {
        mode = true;
      }
    } else {
      if (code[i] !== '1') {
        if (i % 2 === 1) {
          answer += code[i];
        }
      } else {
        mode = false;
      }
    }
  }

  return answer.length === 0 ? 'EMPTY' : answer;
}
