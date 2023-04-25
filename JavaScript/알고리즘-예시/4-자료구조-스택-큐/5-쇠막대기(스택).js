const solution = (str) => {
  const stack = [];
  let answer = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    }

    if (str[i] === ')') {
      stack.pop();
      if (str[i - 1] === '(') {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  }

  return answer;
};

const str = '()(((()())(())()))(())';
const str2 = '(((()(()()))(())()))(()())';

console.log(solution(str));
