function solution(players, callings) {
  const rank = {};
  const p = {};
  players.forEach((el, i) => {
    rank[i + 1] = el;
    p[el] = i + 1;
  });
  callings.forEach((call) => {
    const index = p[call];
    const index2 = p[rank[index - 1]];
    const pl = call;
    const pl2 = rank[index - 1];
    p[call] = index2;
    p[rank[index - 1]] = index;
    rank[index] = pl2;
    rank[index2] = call;
  });

  return Object.values(rank);
}
