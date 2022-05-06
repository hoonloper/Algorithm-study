const fn = require("./jest");

test("2 + 2 to be 4", () => {
  expect(fn.add(2, 2)).toBe(4);
});

test("2 * 4 to be 8", () => {
  expect(fn.mul(2, 4)).toBe(8);
});

test("이름, 나이 to strict equal 이름, 나이, undefined", () => {
  expect(fn.makeUser("이름", "나이")).toStrictEqual({
    name: "이름",
    age: "나이",
    gender: undefined,
  });
});

describe("1 더하기 2는?", () => {
  it("1과 2를 더하는 테스트", () => {
    const one = 1;
    const two = 2;

    expect(one + two).toBe(3);
  });
});

describe("사람 정보 확인", () => {
  it("홍길동의 정보가 제대로 들어왔는지 확인하는 테스트", () => {
    const person = {
      name: "홍길동",
      age: 25,
      gender: "man",
    };
    expect(person).toBe({
      name: "홍길동",
      age: 25,
      gender: "man",
    });
  });
});

describe("사람 정보 확인", () => {
  it("홍길동의 정보가 제대로 들어왔는지 확인하는 테스트", () => {
    const person = {
      name: "홍길동",
      age: 25,
      gender: "man",
    };
    expect(person).toEqual({
      name: "홍길동",
      age: 25,
      gender: "man",
    });
  });
});

describe("1 더하기 2는?", () => {
  it("1과 2를 더하는 테스트", () => {
    const one = 1;
    const two = 2;

    expect(one + two).toEqual(3);
  });
});

describe("사람 정보 확인", () => {
  it("홍길동의 정보가 제대로 들어왔는지 확인하는 테스트", () => {
    const person = {
      name: "홍길동",
      age: 25,
      money: undefined,
    };

    expect(person).toEqual({
      name: "홍길동",
      age: 25,
    });
  });
});

describe("사람 정보 확인", () => {
  it("홍길동의 정보가 제대로 들어왔는지 확인하는 테스트", () => {
    const person = {
      name: "홍길동",
      age: 25,
      money: undefined,
    };
    expect(person).toEqual({
      name: "홍길동",
      age: 25,
      money: 50000,
    });
  });
});

describe("사람 정보 확인", () => {
  it("홍길동의 정보가 제대로 들어왔는지 확인하는 테스트", () => {
    const person = {
      name: "홍길동",
      age: 25,
      money: undefined,
    };
    expect(person).toStrictEqual({
      name: "홍길동",
      age: 25,
    });
  });
});

describe("테스트 전 / 후 처리기", () => {
  beforeEach(() => {
    console.log("beforeEach");
  });
  beforeAll(() => {
    console.log("beforeAll");
  });
  afterEach(() => {
    console.log("afterEach");
  });
  afterAll(() => {
    console.log("afterAll");
  });
  it("테스트 실행 기점", () => {
    console.log("테스트 실행입니다.");
  });
});

describe("테스트", () => {
  beforeAll(() => {
    console.log("첫번째 beforeAll");
  });
  beforeEach(() => {
    console.log("첫번째 beforeEach");
  });
  afterAll(() => {
    console.log("첫번째 afterAll");
  });
  afterEach(() => {
    console.log("첫번째 afterEach");
  });

  it("첫번째 테스트", () => {
    console.log("첫번째 테스트");
  });

  describe("decribe 안에 describe", () => {
    beforeAll(() => {
      console.log("두번째 beforeAll");
    });
    beforeEach(() => {
      console.log("두번째 beforeEach");
    });
    afterAll(() => {
      console.log("두번째 afterAll");
    });
    afterEach(() => {
      console.log("두번째 afterEach");
    });

    it("두번째 테스트", () => {
      console.log("두번째 테스트");
    });

    describe("describe 안에 describe 안에 describe", () => {
      beforeAll(() => {
        console.log("세번째 beforeAll");
      });
      beforeEach(() => {
        console.log("세번째 beforeEach");
      });
      afterAll(() => {
        console.log("세번째 afterAll");
      });
      afterEach(() => {
        console.log("세번째 afterEach");
      });

      it("세번째 테스트", () => {
        console.log("세번째 테스트");
      });
    });

    it("네번째 테스트", () => {
      console.log("네번째 테스트");
    });
  });

  it("다섯번째 테스트", () => {
    console.log("다섯번째 테스트");
  });
});
