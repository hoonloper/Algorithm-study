const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[t], ...numbers] = input.map((el) => el.split(' ').map(Number));

    const answer = numbers
      .map(([n, m]) => {
        const dp = Array.from({ length: m + 1 }, () => []);
        dp[0][0] = 1;

        for (let i = 1; i < m; i++) {
          for (let j = 0; j <= i; j++) {
            if (j === 0) dp[i][0] = dp[i - 1][0] + 1;
            else if (j === i) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
          }
        }
        return dp[m - 1][n - 1];
      })
      .join('\n');

    console.log(answer);
  });
