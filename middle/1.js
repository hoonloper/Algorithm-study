const n = 5;
const s = "안녕";
function solution(n, s) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = s;
  }

  return arr.join("");
}

console.log(solution(n, s));
