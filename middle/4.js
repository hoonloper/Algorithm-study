const N = "good";
const M = "daood";

const N2 = "aaba";
const M2 = "gfdgfa";

const N3 = "atyb";
const M3 = "fghw";

function solution(N, M) {
  const result = [];

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < N.length; j++) {
      if (M[i] === N[j]) {
        result.push(i);
        break;
      }
    }
  }

  return result.reduce((a, b) => a + b, 0);
}

console.log(solution(N, M));
console.log(solution(N2, M2));
console.log(solution(N3, M3));
