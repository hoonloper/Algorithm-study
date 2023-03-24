function solution(park, routes) {
  const answer = [];
  const move = {
    N: -1,
    E: 1,
    W: -1,
    S: 1,
  };
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park.length; j++) {
      if (park[i][j] === 'S') {
        answer.push(i, j);
        break;
      }
    }
    if (answer.length) {
      break;
    }
  }
  const check = (sN, sM, eN, eM) => {
    if (sN > eN) {
      [sN, eN] = [eN, sN];
    }
    if (sM > eM) {
      [sM, eM] = [eM, sM];
    }
    for (let i = sN; i <= eN; i++) {
      for (let j = sM; j <= eM; j++) {
        if (park[i][j] === 'X') {
          return false;
        }
      }
    }
    return true;
  };
  for (const route of routes) {
    const [c, m] = route.split(' ');
    const dis = move[c] * +m;
    if (c === 'E' || c === 'W') {
      if (
        park[0].length > answer[1] + dis &&
        answer[1] + dis >= 0 &&
        check(answer[0], answer[1], answer[0], answer[1] + dis)
      ) {
        answer[1] += dis;
      }
    } else {
      if (
        park.length > answer[0] + dis &&
        answer[0] + dis >= 0 &&
        check(answer[0], answer[1], answer[0] + dis, answer[1])
      ) {
        answer[0] += dis;
      }
    }
  }
  return answer;
}
