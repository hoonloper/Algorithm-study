function solution(name, yearning, photo) {
  const people = name.reduce(
    (acc, cur, i) => ({ ...acc, [cur]: yearning[i] }),
    {}
  );
  return photo.map((el, i) =>
    el.reduce((acc, cur) => (people[cur] ? (acc += people[cur]) : acc), 0)
  );
}
