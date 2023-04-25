const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[t, k], ...coins] = input.map((el) => el.split(' ').map(Number));

    const dp = Array.from({ length: k + 1 }, () => 0);

    dp[0] = 1;

    coins.forEach((coin) => {
      for (let j = coin; j <= k; j++) {
        dp[j] += dp[j - coin];
      }
    });

    console.log(dp[k]);
  });
