const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const len = +input.shift();
    const switchs = input.shift().split(' ').map(Number);
    const peopleCount = +input.shift();
    const people = input.map((el) => el.split(' ').map(Number));

    const changeSwitch = (isSwitch) => (isSwitch ? 0 : 1);
    const man = (index) => {
      for (let i = index - 1; i < len; i += index) {
        switchs[i] = changeSwitch(switchs[i]);
      }
    };

    const woman = (index) => {
      index = index - 1;
      switchs[index] = changeSwitch(switchs[index]);
      for (let i = 1; switchs[index + i] === switchs[index - i]; i++) {
        if (index + i > len - 1 || 0 > index - i) {
          break;
        }
        switchs[index + i] = changeSwitch(switchs[index + i]);
        switchs[index - i] = changeSwitch(switchs[index - i]);
      }
    };

    for (const [gender, index] of people) {
      if (gender === 1) {
        man(index);
      } else {
        woman(index);
      }
    }

    const result = switchs.reduce((acc, cur, i) => {
      if ((i + 1) % 20 === 0) {
        acc += cur + '\n';
      } else {
        acc += cur + ' ';
      }
      return acc;
    }, '');
    console.log(result);
  });
