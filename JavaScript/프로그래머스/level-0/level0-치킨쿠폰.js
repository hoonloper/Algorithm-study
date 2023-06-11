function solution(chicken) {
  let s = 0;
  while (chicken > 9) {
    s += Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10 + (chicken % 10));
  }
  return s;
}
