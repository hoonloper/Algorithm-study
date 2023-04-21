function solution(arr, query) {
  let lt = 0;
  let rt = arr.length - 1;
  query.forEach((el, i) => {
    if (i % 2 === 0) {
      rt = lt + el;
    } else {
      lt += el;
    }
  });

  return lt !== rt ? arr.slice(lt, rt) : [-1];
}
