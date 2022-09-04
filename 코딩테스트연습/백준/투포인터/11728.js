const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [input1, input2, input3] = fs
  .readFileSync(filePath)
  .toString()
  .split('\n');
const arr1 =
  input2.length === 1 ? [+input2[0]] : input2.split(' ').map((el) => +el);
const arr2 =
  input3.length === 1 ? [+input3[0]] : input3.split(' ').map((el) => +el);

const solution = (arr1, arr2) => {
  const answer = [];
  const N = arr1.length;
  const M = arr2.length;
  let p1 = 0;
  let p2 = 0;

  while (p1 < N || p2 < M) {
    if (p1 < N && p2 < M) {
      if (arr1[p1] > arr2[p2]) answer.push(arr2[p2++]);
      else answer.push(arr1[p1++]);
    } else {
      if (p1 < N) {
        answer.push(...arr1.slice(p1));
        p1 = N;
      } else {
        answer.push(...arr2.slice(p2));
        p2 = M;
      }
    }
  }

  return answer;
};

console.log(solution(arr1, arr2));

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const solution = (a, b) => {
//   const aLength = a.length,
//     bLength = b.length;
//   const answer = [];
//   let aIndex = 0,
//     bIndex = 0;
//   a = a.map((e) => parseInt(e));
//   b = b.map((e) => parseInt(e));
//   while (aIndex < aLength || bIndex < bLength) {
//     if (aIndex < aLength && bIndex < bLength) {
//       if (a[aIndex] > b[bIndex]) {
//         answer.push(b[bIndex]);
//         bIndex++;
//       } else {
//         answer.push(a[aIndex]);
//         aIndex++;
//       }
//     } else {
//       if (aIndex < aLength) {
//         answer.push(...a.slice(aIndex));
//         aIndex = aLength;
//       } else {
//         answer.push(...b.slice(bIndex));
//         bIndex = bLength;
//       }
//     }
//   }
//   console.log(answer.join(' '));
// };

// const input = [];
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   const a = input[1].length === 1 ? [input[1]] : input[1].split(' ');
//   const b = input[2].length === 1 ? [input[2]] : input[2].split(' ');
//   delete input;
//   solution(a, b);
//   process.exit();
// });
