function solution(k, tangerine) {
  const obj = {};
  tangerine.forEach((t) => (obj[t] = (obj[t] || 0) + 1));

  const arr = Object.values(obj).sort((a, b) => b - a);
  let count = 0;

  for (const x of arr) {
    count++;
    if (k > x) k -= x;
    else return count;
  }
}
