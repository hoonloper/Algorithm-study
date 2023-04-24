const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    input.pop();
    const arr = input.map((el) => el.split(' ').map(Number));
    const answer = [];
    arr.forEach(([l, p, v], i) => {
      const a = Math.floor(v / p);
      const b = v % p;
      answer.push(`Case ${i + 1}: ` + (a * l + Math.min(b, l)));
    });
    console.log(answer.join('\n'));
  });
