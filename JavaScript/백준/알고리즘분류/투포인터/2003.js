const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [input1, input2] = fs.readFileSync(filePath).toString().split('\n');
const [N, M] = input1.split(' ');
const input = input2.split(' ');

const solution = (N, M, arr) => {
  let answer = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < +N; rt++) {
    sum += +arr[rt];

    if (sum === +M) answer++;

    while (sum > +M) {
      sum -= +arr[lt++];

      if (sum === +M) answer++;
    }
  }

  return answer;
};

console.log(solution(N, M, input));
