const solution = (str) => {
  const s = str.split(' ');
  const newStr = s[0];
  const findStr = s[1];

  // P를 큰 값으로 잡는다.
  let P = 1000;
  const answer = [];

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === findStr) P = 0;
    else P++;

    answer.push(P);
  }

  P = 1000;
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (newStr[i] === findStr) P = 0;
    else P++;

    answer[i] = Math.min(answer[i], P);
  }

  return answer;
};

solution('teachermode e');
