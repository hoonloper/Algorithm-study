const arr = [-5, 2, 13, 23, 100, 4];

function solution(arr) {
  const result = [];
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((a, b) => a + b, 0);

  result.push(min, max, sum);
  return result;
}

console.log(solution(arr));
