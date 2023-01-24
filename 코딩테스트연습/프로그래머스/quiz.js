function solution(quiz) {
  const numbers = quiz.map((el) => el.split('=').map((n) => eval(n)));
  return numbers.map(([q, a]) => (q === a ? 'O' : 'X'));
}
