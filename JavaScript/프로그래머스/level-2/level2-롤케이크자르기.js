function solution(topping) {
  const c = new Set();
  const b = new Set();
  const cA = [];
  const bA = [];
  const len = topping.length;
  for (let i = 0; i < len; i++) {
    const cCake = topping[i];
    const bCake = topping.at(-i);
    c.add(cCake);
    if (i !== 0) b.add(bCake);
    cA.push(c.size);
    bA.push(b.size);
  }

  let count = 0;
  for (let i = 0; i < len; i++) {
    if (cA[i] > bA[len - i - 1]) {
      break;
    }
    if (cA[i] === bA[len - i - 1]) {
      count++;
    }
  }
  return count;
}
