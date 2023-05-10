const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const t = Number(input.shift());
    for (let i = 0; i < t * 2; i += 2) {
      const n = Number(input[i]);
      const arr = input[i + 1].split(' ').map(Number);

      let max = arr[n - 1];
      let money = 0;

      for (let j = n - 1; j >= 0; j--) {
        if (arr[j] > max) {
          max = arr[j];
        } else {
          money += max - arr[j];
        }
      }

      console.log(money);
    }
  });
