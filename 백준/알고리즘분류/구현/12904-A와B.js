const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    let [s, t] = input;

    while (true) {
      if (s === t) {
        console.log(1);
        break;
      }
      if (t.length === 1) {
        console.log(0);
        break;
      }
      if (t[t.length - 1] === 'A') {
        t = t.slice(0, t.length - 1);
      } else {
        t = t
          .slice(0, t.length - 1)
          .split('')
          .reverse()
          .join('');
      }

      if (t.length < s.length) {
        console.log(0);
        break;
      }
    }
  });
