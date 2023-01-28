const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [len, ...strings] = input;
  const answer = strings
    .filter((string, index) => strings.indexOf(string) === index)
    .sort((a, b) => {
      if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
          const uniA = a[i].charCodeAt();
          const uniB = b[i].charCodeAt();
          if (uniA > uniB) {
            return uniA - uniB;
          }
          if (uniA < uniB) {
            return uniA - uniB;
          }
        }
      } else {
        return a.length - b.length;
      }
    });
  console.log(answer.join('\n'));
});
