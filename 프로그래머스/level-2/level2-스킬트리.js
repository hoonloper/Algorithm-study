function solution(skill, skill_trees) {
  const obj = skill
    .split('')
    .reduce((acc, cur, i) => ({ ...acc, [cur]: i + 1 }), {});
  return skill_trees.reduce((acc, s) => {
    const str = s.split('').reduce((acc, cur) => {
      acc += obj[cur] ? cur : '';
      return acc;
    }, '');
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== skill[i]) {
        return acc;
      }
    }
    acc += 1;
    return acc;
  }, 0);
}
