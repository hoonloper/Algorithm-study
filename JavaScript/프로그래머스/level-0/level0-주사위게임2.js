function solution(a, b, c) {
  const [AB, BC, AC] = [a === b, b === c, a === c];
  const [abc, abc2, abc3] = [
    a + b + c,
    a ** 2 + b ** 2 + c ** 2,
    a ** 3 + b ** 3 + c ** 3,
  ];
  return (!AB && BC) || (AB && !BC) || (!AB && BC) || (AC && !AB)
    ? abc * abc2
    : AB && BC
    ? abc * abc2 * abc3
    : abc;
}
