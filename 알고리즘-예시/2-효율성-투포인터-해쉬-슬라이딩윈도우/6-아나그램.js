// Hash
const solution = (str1, str2) => {
  const sH = new Map();

  for (const s of str1) {
    if (sH.has(s)) sH.set(s, sH.get(s) + 1);
    else sH.set(s, 1);
  }

  for (const s of str2) {
    if (!sH.has(s) || sH.get(s) === 0) return 'NO';

    sH.set(s, sH.get(s) - 1);
  }

  return 'YES';
};

// case1 YES
// const str1 = 'AbaAeCe';
// const str2 = 'baeeACA';

// case2 NO
const str1 = 'abaCC';
const str2 = 'Caaab';

console.log(solution(str1, str2));
