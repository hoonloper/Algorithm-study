function solution(common) {
  const x = common[1] - common[0];
  const lastNum = common[common.length - 1];
  const num = x === common[2] - common[1] ? '+' : '*';
  return num === '+' ? lastNum + x : lastNum * (common[1] / common[0]);
}
