function solution(cards1, cards2, goal) {
  let count1 = 0;
  let count2 = 0;
  const c1Len = cards1.length;
  const c2Len = cards2.length;

  for (const g of goal) {
    if (count1 < c1Len && g === cards1[count1]) {
      count1++;
    } else if (count2 < c2Len && g === cards2[count2]) {
      count2++;
    } else {
      return 'No';
    }
  }

  return 'Yes';
}
