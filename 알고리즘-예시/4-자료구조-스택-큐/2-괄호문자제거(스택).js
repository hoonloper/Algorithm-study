const solution = (str) => {
  const stack = [];
  const arr = [];

  for (const s of str) {
    if (s === '(') {
      stack.push(s);
    } else if (s === ')') {
      stack.pop();
    } else {
      if (stack.length === 0) arr.push(s);
    }
  }
  return arr.join('');
};

const str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

solution(str);
