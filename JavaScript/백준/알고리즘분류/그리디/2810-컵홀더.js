const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input.shift();
    const k = input[0];
    let cnt = 1;
    for (let i = 0; i < n; i++) {
      if (k[i] === 'L') {
        i++;
      }
      cnt++;
    }
    console.log(cnt > n ? n : cnt);
  });
