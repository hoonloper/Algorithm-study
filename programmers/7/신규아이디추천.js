function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/gi, "")
    .replace(/[.]{2,}/gi, ".")
    .replace(/^[.]|[.]$/gi, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/[.]$/gi, "");

  return answer.padEnd(3, answer[answer.length - 1]);
}
