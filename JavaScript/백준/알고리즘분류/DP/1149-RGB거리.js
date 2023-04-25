const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[t], ...rgb] = input.map((el) => el.split(' ').map(Number));

    const dp = Array.from({ length: t + 1 }, () => Array(3).fill(0));
    dp[1] = rgb[0];
    for (let i = 2; i <= t; i++) {
      dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgb[i - 1][0];
      dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgb[i - 1][1];
      dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + rgb[i - 1][2];
    }
    console.log(Math.min(...dp[t]));
  });
