function solution(my_string) {
  const alphas = {};
  for (let i = 65; i <= 90; i++) {
    alphas[String.fromCharCode(i)] = 0;
  }
  for (let i = 97; i <= 122; i++) {
    alphas[String.fromCharCode(i)] = 0;
  }
  for (const s of my_string) {
    alphas[s] += 1;
  }
  return Object.values(alphas);
}
