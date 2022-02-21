function solution(s) {
  const people = {};
  const person = s.split("\n");

  for (let i = 1; i < person.length; i++) {
    const info = person[i].split(" ");
    people[info[0]] = info[1];
  }

  return people;
}

console.log(
  solution(`2
woorim 남자
ofin 여자`)
);
console.log(
  solution(`3
minjae 남자
sangjun 여자
jiwon 여자`)
);
console.log(
  solution(`2
wooahan 남자
agile 여자`)
);
