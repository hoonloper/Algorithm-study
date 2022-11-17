// Hash
/* 함수형으로 리팩토링 */
const solution = (s, t) => {
  let answer = 0;
  let lt = 0;
  const sH = new Map();
  const tH = new Map();
  const tLen = t.length;

  makeMap(tH, t, tLen);
  makeMap(sH, s, tLen - 1);

  for (let rt = tLen - 1; rt < s.length; rt++) {
    saveMapData(sH, s[rt]);

    if (compareMaps(sH, tH)) answer++;

    sH.set(s[lt], sH.get(s[lt]) - 1);

    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);

    lt++;
  }

  return answer;
};

const saveMapData = (map, key) => {
  if (map.has(key)) map.set(key, map.get(key) + 1);
  else map.set(key, 1);
};

const makeMap = (map, str, len) => {
  for (let i = 0; i < len; i++) {
    saveMapData(map, str[i]);
  }
};

const compareMaps = (sH, tH) => {
  if (sH.size !== tH.size) return false;

  for (const [key, val] of sH) {
    if (!tH.has(key) || tH.get(key) !== val) return false;
  }

  return true;
};

const str1 = 'bacaAacba';
const str2 = 'abc';

console.log(solution(str1, str2));

/* 기존 코드 */
const solution = (s, t) => {
  let answer = 0;
  let lt = 0;
  const sH = new Map();
  const tH = new Map();
  const len = t.length - 1;

  for (const x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    if (compareMaps(sH, tH)) answer++;

    sH.set(s[lt], sH.get(s[lt]) - 1);

    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);

    lt++;
  }

  return answer;
};

const compareMaps = (sH, tH) => {
  if (sH.size !== tH.size) return false;

  for (const [key, val] of sH) {
    if (!tH.has(key) || tH.get(key) !== val) return false;
  }

  return true;
};

const str1 = 'bacaAacba';
const str2 = 'abc';

console.log(solution(str1, str2));
