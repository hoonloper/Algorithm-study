const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [t, ...numbers] = input.map(Number);

    const first = Math.round(
      numbers.reduce((acc, el) => acc + el, 0) / numbers.length
    ).toString();
    console.log(first);

    const second = [...numbers].sort((a, b) => a - b)[
      Math.floor(numbers.length / 2)
    ];
    console.log(second);

    const third = numbers.reduce((acc, el) => {
      if (acc[el]) {
        acc[el] += 1;
      } else {
        acc[el] = 1;
      }
      return acc;
    }, {});
    const th = Object.entries(third).sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return b[1] - a[1];
      }
    });
    console.log(
      th.length === 1 ? th[0][0] : th[0][1] > th[1][1] ? th[0][0] : th[1][0]
    );

    const four = Math.max(...numbers) - Math.min(...numbers);
    console.log(four);
  });
