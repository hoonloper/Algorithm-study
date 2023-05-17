function solution(arr, delete_list) {
  return delete_list.reduce((acc, cur) => {
    const idx = acc.findIndex((el) => el === cur);
    if (idx === -1) {
      return acc;
    }
    acc.splice(idx, 1);
    return acc;
  }, arr);
}
