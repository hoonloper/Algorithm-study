const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input[0];
    const stack = [];
    const t = [];

    for (let i = 1; i <= n; i++) {
      stack.push(i);
    }

    let flag = false;
    while (stack.length !== 1) {
      if (flag) {
        stack.push(stack.shift());
      } else {
        t.push(stack.shift());
      }
      flag = !flag;
    }
    const answer = t.length ? t.join(' ') + ' ' : '';

    console.log(answer + stack[0]);
  });
