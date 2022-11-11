// Hash
const solution = (k, arr) => {
  let answer;
  let sH = new Map();
  let max = Number.MIN_SAFE_INTEGER;

  arr.forEach((el) => {
    if (!sH.has(el)) sH.set(el, 1);
    else sH.set(el, sH.get(el) + 1);
  });

  for (let [key, val] of sH) {
    if (max < val) {
      max = val;
      answer = key;
    }
  }

  return answer;
};

const str = 'BACBACCACCBDEDE';
const k = 15;

console.log(solution(k, str.split('')));
