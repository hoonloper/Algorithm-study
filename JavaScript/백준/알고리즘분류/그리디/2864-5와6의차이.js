const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input[0].split(' ');

    const minN = n.replace(/6/g, '5');
    const minM = m.replace(/6/g, '5');
    const maxN = n.replace(/5/g, '6');
    const maxM = m.replace(/5/g, '6');

    console.log(+minN + +minM, +maxN + +maxM);
  });
