const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const num = +input[0];

    const dp = [BigInt(0), BigInt(1), BigInt(1)];

    for (let i = 3; i <= num; i++) {
      dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
    }
    console.log(dp[num].toString());
  });
