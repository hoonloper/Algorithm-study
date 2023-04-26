function solution(order) {
  return order.reduce(
    (a, c) => (c.includes('cafelatte') ? a + 5000 : a + 4500),
    0
  );
}
