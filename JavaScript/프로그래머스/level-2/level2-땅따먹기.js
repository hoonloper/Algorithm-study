function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      let max = 0;
      for (let z = 0; z < 4; z++) {
        if (z === j) {
          continue;
        }
        max = Math.max(max, land[i - 1][z]);
      }
      land[i][j] += max;
    }
  }
  return Math.max(...land[land.length - 1]);
}
