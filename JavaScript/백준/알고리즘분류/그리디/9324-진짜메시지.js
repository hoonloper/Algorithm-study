const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input.shift();
    const arr = [...input];

    const answer = arr.reduce((acc, cur) => {
      const obj = {};
      let real = true;
      for (let i = 0; i < cur.length; i++) {
        if (obj[cur[i]]) {
          obj[cur[i]]++;
          if (obj[cur[i]] >= 3) {
            if (i === cur.length - 1) {
              real = false;
              break;
            } else if (cur[i] !== cur[i + 1]) {
              real = false;
              break;
            }
            i++;
            obj[cur[i]] = 0;
          }
        } else {
          obj[cur[i]] = 1;
        }
      }
      acc += real ? 'OK\n' : 'FAKE\n';
      return acc;
    }, '');
    console.log(answer);
  });
