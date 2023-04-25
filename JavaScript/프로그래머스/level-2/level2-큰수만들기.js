function solution(number, k) {
  const arr = number.split('').map(Number).reverse();
  let stack = [];

  while (arr.length && k > 0) {
    stack.push(arr.pop());
    while (stack[stack.length - 1] < arr[arr.length - 1] && k) {
      stack.pop();
      k -= 1;
    }
  }
  if (k !== 0) stack = stack.slice(0, -k);

  return stack.join('') + arr.reverse().join('');
}
