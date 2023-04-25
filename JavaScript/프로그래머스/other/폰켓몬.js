function solution(nums) {
  const result = nums.filter((el, i) => nums.indexOf(el) === i);

  return result.length > nums.length / 2 ? nums.length / 2 : result.length;
}
