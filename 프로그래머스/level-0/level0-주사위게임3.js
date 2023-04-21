function solution(a, b, c, d) {
  const nums = [a, b, c, d];
  const obj = {};
  for (let i = 0; i < 4; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  // 첫번째 조건
  if (arr.length === 1) {
    return 1111 * +arr[0][0];
  }

  if (arr.length === 2) {
    // 두번째 조건
    if (arr[0][1] === 3) {
      return (10 * +arr[0][0] + +arr[1][0]) ** 2;
    }
    // 세번째 조건
    return (+arr[0][0] + +arr[1][0]) * Math.abs(+arr[0][0] - +arr[1][0]);
  }
  // 네번째 조건
  if (arr.length === 3) {
    return +arr[1][0] * +arr[2][0];
  }

  return +arr.sort((a, b) => +a[0] - +b[0])[0][0];
}
