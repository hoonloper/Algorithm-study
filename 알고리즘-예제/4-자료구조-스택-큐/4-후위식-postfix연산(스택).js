const solution = (str) => {
  const stack = [];

  for (const s of str) {
    if (0 < +s && +s < 10) {
      stack.push(+s);
    } else {
      const second = stack.pop();
      const first = stack.pop();

      stack.push(cal(s, first, second));
    }
  }

  return stack[0];
};

const cal = (s, num1, num2) => {
  switch (s) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return num1 % num2;
    default:
      break;
  }
};

const str = '352+*9-';

console.log(solution(str));
