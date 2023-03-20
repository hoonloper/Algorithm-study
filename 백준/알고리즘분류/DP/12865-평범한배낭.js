const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N, K], ...arr] = input.map((el) => el.split(' ').map(Number));

    const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

    for (let i = 1; i <= N; i++) {
      const [W, V] = arr[i - 1];
      for (let j = 1; j <= K; j++) {
        if (j - W >= 0) dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
        else dp[i][j] = dp[i - 1][j];
      }
    }

    console.log(dp[N][K]);
  });
