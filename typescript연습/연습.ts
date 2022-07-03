interface Types {
  str: string;
  num: number;
  bool: boolean;
  fn: any;
  fn2: any;
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
      fn2: {
        fn3: () => {
          return "test Function";
        },
      },
    };

    return typeVar.fn2.fn3();
  }
}
