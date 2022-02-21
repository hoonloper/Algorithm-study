const n = 5;
const s = "안녕";
function solution(n, s) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i - 1] = s;
  }

  return arr.join("");
}

console.log(solution(n, s));
