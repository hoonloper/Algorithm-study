const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const num = +input[0];

    const dp = Array.from({ length: num + 1 }, () => BigInt(0));

    dp[1] = BigInt(1);
    dp[2] = BigInt(2);
    for (let i = 3; i <= num; i++) {
      dp[i] = (BigInt(dp[i - 1]) + BigInt(dp[i - 2])) % BigInt(15746);
    }
    console.log(dp[num].toString());
  });
