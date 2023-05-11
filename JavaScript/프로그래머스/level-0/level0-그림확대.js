function solution(picture, k) {
  return picture.flatMap((el) => {
    let str = '';
    for (const s of el) {
      str += s.repeat(k);
    }
    return Array(k).fill(str);
  });
}
