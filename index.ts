class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 16, "female");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, ${person.age}, ${person.gender}`;
};

console.log(sayHi(lynn));

export {};