const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    let arr = input[0].split('');
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
      if (stack.length === 0 && (arr[i] === ')' || arr[i] === ']')) {
        console.log(0);
        return;
      }

      if (arr[i] === '(' || arr[i] === '[') stack.push(arr[i]);

      if (arr[i] === ')') {
        if (stack[stack.length - 1] === '(') {
          stack.pop();
          stack.push(2);
        } else if (
          stack[stack.length - 2] === '(' &&
          stack[stack.length - 1] !== '['
        ) {
          const num = stack.pop();
          stack.pop();
          stack.push(2 * num);
        } else {
          console.log(0);
          return;
        }
      }

      if (arr[i] === ']') {
        if (stack[stack.length - 1] === '[') {
          stack.pop();
          stack.push(3);
        } else if (
          stack[stack.length - 2] === '[' &&
          stack[stack.length - 1] !== '('
        ) {
          const num = stack.pop();
          stack.pop();
          stack.push(3 * num);
        } else {
          console.log(0);
          return;
        }
      }

      if (
        typeof stack[stack.length - 1] === 'number' &&
        typeof stack[stack.length - 2] === 'number'
      ) {
        const num = stack[stack.length - 1] + stack[stack.length - 2];
        stack.pop();
        stack.pop();
        stack.push(num);
      }
    }
    if (stack.length !== 1 || typeof stack[0] !== 'number') {
      console.log(0);
    } else {
      console.log(stack[0]);
    }
  });
