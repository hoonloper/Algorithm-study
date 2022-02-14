function solution(n, arr1, arr2) {
  const decs = [];
  const result = [];

  for (let i = 0; i < n; i++) {
    decs.push((arr1[i] | arr2[i]).toString(2));
  }

  for (let i of decs) {
    const sepDec = i.split("");

    if (i.length < n) {
      for (let j = i.length; j < n; j++) {
        sepDec.unshift(0);
      }
    } else if (i.length > n) {
      for (let j = n; j < i.length; j++) {
        sepDec.shift();
      }
    }

    let conv = "";

    for (let j = 0; j < sepDec.length; j++) {
      Number(sepDec[j]) ? (conv += "#") : (conv += " ");
    }

    result.push(conv);
  }

  return result;
}
