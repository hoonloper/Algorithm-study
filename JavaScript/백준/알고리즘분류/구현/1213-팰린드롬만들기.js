const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const str = input[0].split('');
    const alphas = {};

    str.forEach((el) => {
      if (alphas[el]) {
        alphas[el] += 1;
      } else {
        alphas[el] = 1;
      }
    });

    const arr = Object.entries(alphas)
      .filter(([k, v]) => v > 0)
      .sort((a, b) => a[0].localeCompare(b[0]));
    let oddCnt = 0;
    let oddChar = '';
    for (const [key, val] of arr) {
      if (val % 2) {
        oddCnt++;
        oddChar = key;
      }
    }
    if (oddCnt > 1) {
      console.log("I'm Sorry Hansoo");
      return;
    }
    let a = '';
    for (const [k, v] of arr) {
      let s = '';
      for (let i = 0; i < Math.floor(v / 2); i++) {
        s += k;
      }
      a += s;
    }
    const b = a.split('').reverse().join('');
    console.log(oddCnt === 1 ? a + oddChar + b : a + b);
  });
