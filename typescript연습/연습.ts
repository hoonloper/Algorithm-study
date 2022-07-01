interface Types {
  str: string;
  num: number;
  bool: boolean;
  fn: any;
}
class typeTest {
  constructor() {}

  testFn() {
    const typeVar: Types = {
      str: "문자열",
      num: 1,
      bool: true,
      fn: () => {
        return 10;
      },
    };

    return typeVar;
  }
}
