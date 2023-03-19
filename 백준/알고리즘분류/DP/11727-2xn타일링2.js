const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const num = +input[0];

    const dp = [0, 1, 3];

    for (let i = 3; i <= num; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
    }

    console.log(dp[num]);
  });
