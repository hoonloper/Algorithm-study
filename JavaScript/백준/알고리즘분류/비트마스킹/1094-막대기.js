const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    let target = +input.shift();
    let cnt = 0;
    while (target > 0) {
      if (target & 1) {
        cnt++;
      }
      target >>= 1;
    }
    console.log(cnt);
  });
