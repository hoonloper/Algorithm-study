const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [[t], ...arr] = input.map((el) => el.split(' '));
  const hap = [];
  const command = {
    add: (num) => {
      if (!hap.includes(num)) {
        hap.push(num);
      }
    },
    check: (num) => {
      return hap.includes(num) ? 1 : 0;
    },
    remove: (num) => {
      const index = hap.findIndex((el) => el === num);
      if (index >= 0) {
        hap.splice(index, 1);
      }
    },
    toggle: (num) => {
      if (hap.includes(num)) {
        const index = hap.findIndex((el) => el === num);
        if (index >= 0) {
          hap.splice(index, 1);
        }
      } else {
        if (!hap.includes(num)) {
          hap.push(num);
        }
      }
    },
    all: () => {
      for (let i = 1; i <= 20; i++) {
        hap[i - 1] = i;
      }
    },
    empty: () => {
      hap.length = 0;
    },
  };

  arr.forEach(([c, n]) => {
    if (c === 'check') {
      console.log(command.check(+n));
    } else {
      command[c](+n);
    }
  });
});
