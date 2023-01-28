function solution(babbling) {
  const x = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;

  for (let bab of babbling) {
    bab = bab.replace(/aya|ye|woo|ma/g, '');
    if (!bab) count++;
  }

  return count;
}
