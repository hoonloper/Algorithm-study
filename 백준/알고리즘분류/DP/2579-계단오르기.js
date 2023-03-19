const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [t, ...numbers] = input.map(Number);

    const dp = new Array(t + 1).fill(0);
    numbers.unshift(0);
    dp[1] = numbers[1];
    dp[2] = numbers[1] + numbers[2];
    for (let i = 3; i <= t; i++) {
      dp[i] = Math.max(
        dp[i - 2] + numbers[i],
        dp[i - 3] + numbers[i - 1] + numbers[i]
      );
    }

    console.log(dp[t]);
  });
