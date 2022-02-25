interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "micle",
  age: 22,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, ${person.age}, ${person.gender}`;
};

console.log(sayHi(person));

export {};
