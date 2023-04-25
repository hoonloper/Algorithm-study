function solution(people, limit) {
  people.sort((a, b) => b - a);
  let l = 0;
  let r = people.length - 1;

  while (l < r) {
    if (people[l] + people[r] <= limit) r--;
    l++;
  }

  return r + 1;
}
