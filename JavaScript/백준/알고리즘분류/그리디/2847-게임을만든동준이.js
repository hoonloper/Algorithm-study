const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const t = Number(input.shift());
    const arr = input.map(Number);

    let count = 0;

    for (let i = t - 1; i > 0; i--) {
      if (arr[i] <= arr[i - 1]) {
        count += arr[i - 1] - arr[i] + 1;
        arr[i - 1] = arr[i] - 1;
      }
    }

    console.log(count);
  });
