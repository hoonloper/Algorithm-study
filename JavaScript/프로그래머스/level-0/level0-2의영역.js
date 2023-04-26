function solution(arr) {
  const s = arr.findIndex((el) => el === 2);
  if (s === -1) {
    return [-1];
  }
  const e = [...arr].reverse().findIndex((el) => el === 2);
  return arr.slice(s, arr.length - e);
}
