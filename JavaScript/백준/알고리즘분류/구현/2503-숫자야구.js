const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const t = +input.shift();
    const arr = input.map((el) => el.split(' ').map(Number));

    let answer = 0;
    for (let i = 123; i < 1000; i++) {
      const newScore = String(i);
      if (new Set(newScore.split('')).size < 3 || newScore.includes(0)) {
        continue;
      }
      let count = 0;
      for (let [score, s, b] of arr) {
        score = '' + score;
        let newS = 0;
        let newB = 0;

        if (newScore[0] === score[0]) {
          newS++;
        }
        if (newScore[1] === score[1]) {
          newS++;
        }
        if (newScore[2] === score[2]) {
          newS++;
        }
        if (newScore[0] !== score[0] && newScore.includes(score[0])) {
          newB++;
        }
        if (newScore[1] !== score[1] && newScore.includes(score[1])) {
          newB++;
        }
        if (newScore[2] !== score[2] && newScore.includes(score[2])) {
          newB++;
        }
        if (newS === s && newB === b) {
          count++;
        }
      }
      if (count === t) {
        answer++;
      }
    }
    console.log(answer);
  });
