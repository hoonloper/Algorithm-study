const name = "micle",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, ${age}, ${gender}`);
};

sayHi(name, age);

export {};
