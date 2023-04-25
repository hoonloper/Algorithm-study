function solution(str1, str2) {
  if (!str1.length || !str2.length) {
    return 65536;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const arr1 = [];
  const arr2 = [];

  for (let i = 1; i < str1.length; i++) {
    const str = str1[i - 1] + str1[i];
    if (str.match(/^[a-zA-Z]*$/)) {
      arr1.push(str);
    }
  }
  for (let i = 1; i < str2.length; i++) {
    const str = str2[i - 1] + str2[i];
    if (str.match(/^[a-zA-Z]*$/)) {
      arr2.push(str);
    }
  }
  const gyo = [];
  const hap = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      gyo.push(...arr1.splice(arr1.indexOf(arr2[i]), 1));
    }
    hap.push(arr2[i]);
  }

  for (let i = 0; i < arr1.length; i++) {
    hap.push(arr1[i]);
  }

  if (gyo.length === hap.length) {
    return 65536;
  }
  return Math.floor((gyo.length / hap.length) * 65536);
}
