"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "202020202020", "", "hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
/* 클래스 강의 내용 */
// class Human {
//   public name: string;
//   public age: number;
//   public gender: string;
//   constructor(name: string, age: number, gender?: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }
// const lynn = new Human("Lynn", 16, "female");
// const sayHi = (person: Human): string => {
//   return `Hello ${person.name}, ${person.age}, ${person.gender}`;
// };
// console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map