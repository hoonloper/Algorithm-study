for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let j = 0; j < 5; j++) {
  console.log(j);
}
/*---------------------------*/
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i + " " + j);
  }
}

function func(n) {
  if (n <= 1) {
    return 1;
  }
  return func(n - 1) + func(n - 1);
}

console.log(func(n));
