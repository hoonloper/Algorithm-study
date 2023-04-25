const solution = (str) => {
  let answer = '';
  let count = 1;
  str = str + ' ';

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      answer += str[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }

  return answer;
};

solution('KKHSSSSSSSE');
