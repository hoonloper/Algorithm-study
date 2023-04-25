const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[t], [...numbers]] = input.map((el) => el.split(' ').map(Number));

    const dp = Array(t + 1).fill(0);

    numbers.forEach((el, i) => {
      let max = 0;

      for (let j = 0; j < i; j++) {
        if (dp[j] > max && numbers[j] < el) {
          max = dp[j];
        }
      }
      dp[i] = max + 1;
    });

    console.log(Math.max(...dp));
  });
