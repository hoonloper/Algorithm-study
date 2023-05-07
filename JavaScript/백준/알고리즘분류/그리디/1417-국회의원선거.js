const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input[0];
    const arr = input
      .slice(2)
      .map(Number)
      .sort((a, b) => a - b);
    let dasom = +input[1];

    if (n === 1) {
      console.log(0);
      return;
    }

    let max = Math.max(...arr);
    let count = 0;

    while (dasom <= max) {
      arr[arr.indexOf(max)] -= 1;
      dasom += 1;
      count++;
      max = Math.max(...arr);
    }

    console.log(count);
  });
