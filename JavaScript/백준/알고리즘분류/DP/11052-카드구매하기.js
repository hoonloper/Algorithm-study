const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N], [...cards]] = input.map((el) => el.split(' ').map(Number));
    const dp = Array(N + 1).fill(0);

    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= i; j++) {
        dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
      }
    }
    console.log(dp[N]);
  });
