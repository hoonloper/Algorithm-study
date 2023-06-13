const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input.shift();
    const arr = input.map((el) => el.split(' '));
    const stack = [];

    const commands = {
      pop: () => stack.pop() || -1,
      size: () => stack.length,
      empty: () => (stack.length ? 0 : 1),
      top: () => stack[stack.length - 1] || -1,
    };
    const result = arr.reduce((acc, [command, x]) => {
      if (command === 'push') {
        stack.push(+x);
        return acc;
      }
      return acc + commands[command]() + '\n';
    }, '');

    console.log(result);
  });
