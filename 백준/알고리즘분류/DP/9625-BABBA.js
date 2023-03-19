const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const k = +input[0];

    if (k === 1) {
      console.log('0 1');
      return;
    }

    const dp = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 2],
      [2, 3],
      [3, 5],
      [5, 8],
    ];

    for (let i = 7; i <= k; i++) {
      dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
    }

    console.log(dp[k].join(' '));
  });
