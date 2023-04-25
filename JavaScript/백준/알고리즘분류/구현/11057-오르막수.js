const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input[0];

    const dp = [[], new Array(10).fill(1)];

    for (var i = 2; i <= n; i++) {
      dp[i] = [];
      dp[i][0] = dp[i - 1][0] % 10007;

      for (let j = 1; j < 10; j++) {
        dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
      }
    }
    console.log(dp[n].reduce((a, v) => a + v, 0) % 10007);
  });
