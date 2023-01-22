const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const N = +input.shift();
    const [dis, oils] = input.map((el) => el.split(' ').map(BigInt));

    let curPrice = oils[0];
    let cost = 0n;

    for (let i = 0; i < N - 1; i++) {
      cost += curPrice * dis[i];
      if (curPrice > oils[i + 1]) curPrice = oils[i + 1];
    }

    console.log(String(cost));
  });
