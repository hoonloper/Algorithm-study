const solution = (n, arr) => {
  const answer = [];
  const originArr = [...arr];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (arr[i] !== originArr[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
};

const n = 9;
const arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];

const n2 = 6;
const arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(n2, arr2));
