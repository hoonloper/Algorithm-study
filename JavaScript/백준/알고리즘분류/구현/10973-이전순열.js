const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input.shift();
    const arr = input[0].split(' ').map(Number);

    const stack = [];
    let index = -1;
    let min = 10001;
    for (let i = n - 1; i >= 0; i--) {
      if (min < arr[i]) {
        index = i;
        break;
      }
      stack.push(arr[i]);
      min = arr[i];
    }
    if (index === -1) {
      console.log(-1);
      return;
    }
    for (let i = 0; i < stack.length; i++) {
      if (arr[index] > stack[i]) {
        const [a] = stack.splice(i, 1, arr[index]);
        arr[index] = a;
        break;
      }
    }
    console.log(arr.slice(0, index + 1).join(' ') + ' ' + stack.join(' '));
  });
