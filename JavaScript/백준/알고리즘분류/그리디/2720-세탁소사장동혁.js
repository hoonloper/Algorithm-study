const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const t = Number(input.shift());
    const arr = input.map(Number);

    const answer = arr.map((el) => {
      const m = [];
      if (Math.floor(el / 25) > 0) {
        m.push(Math.floor(el / 25));
        el = el % 25;
      } else {
        m.push(0);
      }
      if (Math.floor(el / 10) > 0) {
        m.push(Math.floor(el / 10));
        el = el % 10;
      } else {
        m.push(0);
      }
      if (Math.floor(el / 5) > 0) {
        m.push(Math.floor(el / 5));
        el = el % 5;
      } else {
        m.push(0);
      }
      if (Math.floor(el / 1) > 0) {
        m.push(Math.floor(el / 1));
        el = el % 1;
      } else {
        m.push(0);
      }
      return m.join(' ');
    });
    console.log(answer.join('\n'));
  });
