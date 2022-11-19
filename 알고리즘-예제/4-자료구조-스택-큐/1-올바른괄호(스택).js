const solution = (str) => {
  const stack = [];

  if (str.length % 2 === 1) {
    return 'NO';
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }

  return stack.length === 0 ? 'YES' : 'NO';
};

const str = '(()(())))(()';

solution(str);
