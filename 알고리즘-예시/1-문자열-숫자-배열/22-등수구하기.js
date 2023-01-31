function solution(number, a) {
  const answer = [];

  for (let i = 0; i < number; i++) {
    let count = 1;

    for (let j = 0; j < number; j++) {
      if (a[i] === a[j]) continue;
      else if (a[i] < a[j]) count++;
    }

    answer.push(count);
  }

  return answer;
}
const number = 5;
const a = [87, 89, 92, 100, 76];
// const b = [];
solution(number, a);
