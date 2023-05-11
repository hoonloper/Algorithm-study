function solution(str_list) {
  const lIdx = str_list.findIndex((el) => el === 'l');
  const rIdx = str_list.findIndex((el) => el === 'r');
  if (lIdx === -1 && rIdx === -1) {
    return [];
  }
  if (lIdx === -1 || rIdx === -1) {
    if (lIdx >= 0) {
      return str_list.slice(0, lIdx);
    }
    return str_list.slice(rIdx + 1);
  }
  if (lIdx < rIdx) {
    return str_list.slice(0, lIdx);
  } else {
    return str_list.slice(rIdx + 1);
  }
}
