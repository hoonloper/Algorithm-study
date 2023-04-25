const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const arr = input;
    arr.pop();
    const obj = { ']': '[', ')': '(' };

    arr.forEach((s) => {
      const stack = [];
      let flag = true;
      for (const a of s) {
        if (a === ']' || a === ')') {
          if (stack[stack.length - 1] === obj[a]) {
            stack.pop();
          } else {
            flag = false;
            break;
          }
        }
        if (a === '[' || a === '(') {
          stack.push(a);
        }
      }
      if (stack.length > 0) {
        flag = false;
      }

      console.log(flag ? 'yes' : 'no');
    });
  });
