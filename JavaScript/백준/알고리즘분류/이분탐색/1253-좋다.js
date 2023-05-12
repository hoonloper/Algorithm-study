const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const num = +input.shift();
    const arr = input[0]
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < num; i++) {
      let s = 0;
      let e = num - 1;
      while (s < e) {
        const sum = arr[s] + arr[e];
        if (s === i || sum < arr[i]) {
          s++;
        } else if (e === i || sum > arr[i]) {
          e--;
        } else {
          count++;
          break;
        }
      }
    }
    console.log(count);
  });
