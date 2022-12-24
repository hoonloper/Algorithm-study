const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  // 100점짜리 코드일뻔한 것..
  const [[str], [q], ...questions] = input.map((el) => el.split(' '));
  const psum = Array.from({ length: 26 }, () => []);
  const aCode = 'a'.charCodeAt();

  for (let i = 0; i < str.length; i++) {
    for (let a = 0; a < 26; a++) {
      psum[a][i] = i === 0 ? 0 : psum[a][i - 1];
    }
    psum[str[i].charCodeAt() - aCode][i]++;
  }
  for (const [alpha, start, end] of questions) {
    const alphaCode = alpha.charCodeAt();
    console.log(
      +start === 0
        ? psum[alphaCode - aCode][+end]
        : psum[alphaCode - aCode][+end] - psum[alphaCode - aCode][+start - 1]
    );
  }
  // 50점짜리 코드
  // const [[str], [q], ...questions] = input.map((el) => el.split(' '));
  // const answer = [];
  // for (const [alpha, start, end] of questions) {
  //   let count = 0;
  //   for (let i = +start; i <= +end; i++) {
  //     if (alpha === str[i]) count++;
  //   }
  //   answer.push(count);
  // }
  // console.log(answer.join('\n'));
});
