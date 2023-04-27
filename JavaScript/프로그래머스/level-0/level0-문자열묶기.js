function solution(strArr) {
  const obj = strArr.reduce((acc, cur) => {
    if (acc[cur.length]) {
      acc[cur.length]++;
    } else {
      acc[cur.length] = 1;
    }
    return acc;
  }, {});
  return Math.max(...Object.values(obj));
}
