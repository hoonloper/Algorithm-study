function solution(n) {
  let num = "";

  while (true) {
    num += String(n % 3);
    n = Math.floor(n / 3);

    if (!n) break;
  }

  return parseInt(num, 3);
}

console.log(solution(45));
