const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on('line', function (line) {
  inputs.push(line);
}).on('close', function () {
  inputs.pop();
  strs = inputs;
  console.log(
    inputs
      .map((input, i) =>
        strs[i] === input.split('').reverse().join('') ? 'yes' : 'no'
      )
      .join('\n')
  );
  // const numbers = input.filter((el) => el[0] !== '0');
  // const halfs = numbers.map((number) => Math.floor(number.length / 2));
  // const answer = [];
  // let isResult = false;

  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = 0; j < halfs[i]; j++) {
  //     if (numbers[i][j] === numbers[i][numbers[i].length - j - 1]) {
  //       isResult = true;
  //     } else {
  //       isResult = false;
  //       break;
  //     }
  //   }
  //   if (isResult) answer.push('yes');
  //   else answer.push('no');
  // }

  // console.log(answer.join('\n'));
});
