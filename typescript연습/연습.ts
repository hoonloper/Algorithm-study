interface Types {
  str: string;
  num: number;
  bool: boolean;
}
class typeTest {
  constructor() {}

  testFn() {
    const typeVar: Types = {
      str: "문자열",
      num: 1,
      bool: true,
    };

    console.log(typeVar);

    return typeVar;
  }
}
