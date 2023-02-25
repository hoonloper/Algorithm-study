function solution(ingredient) {
  const stack = [];
  let count = 0;
  ingredient.forEach((item) => {
    stack.push(item);

    if (stack.length >= 4) {
      const burger = stack.slice(-4).join('');

      if (burger === '1231') {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  });
  return count;
}
