// try {
//   const 정용훈 = "미남";
//   정용훈 = "추남";
// } catch (error) {
//   console.log("출력 : ", error);
// } finally {
//   console.log("Modern Agile 정용훈");
// }

// 상수에 값을 할당했을 때
// try {
//   const a = "a";
//   a = "B";
// } catch (error) {
//   console.log(error);
// }

// 에러가 없는 예시
try {
  console.log("try 시작");

  console.log("에러 없음");

  console.log("try 끝");
} catch (error) {
  console.log("에러가 없으니 catch문을 무시됨");
} finally {
  console.log("에러 유무의 관계없이 무조건 실행됨!");
}

// 에러가 발생한 예시
// try {
//   console.log("try 시작");

//   에러발생이요;

//   console.log("try 끝 (실행되지 않음)");
// } catch (error) {
//   console.log("에러가 발생했습니다.");
// } finally {
//   console.log("에러 유무의 관계없이 무조건 실행됨!");
// }

// 오직 런타임 에러에만 동작
// try {
//   {{{{{{{
// } catch(e) {
//   console.log("Javascript는 이 코드를 이해할 수 없습니다.");
// }

// 동기적으로 동작
// try {
//   setTimeout(() => {
//     example;
//   }, 1000);
// } catch (error) {
//   console.log("동작 X");
// }

// setTimeout(() => {
//   try {
//     example;
//   } catch {
//     console.log("에러 발생");
//   }
// }, 1000);

// 에러 객체
// try {
//   // code
// } catch (에러객체) {
//   // code
// }

// try {
//   변수를정의하지않음;
// } catch (에러지롱) {
//   console.log(에러지롱.name);
//   console.log(에러지롱.message);
//   console.log(에러지롱.stack);

//   console.log(에러지롱);
// }

// 선택적 'catch' 바인딩
// try {
//   에러발생;
// } catch {
//   console.log("(err)없이 사용할 수 있음!!");
// }

// throw
// const error = new Error("에러 메시지를 입력합니다.");

// console.log(error.name);
// console.log(error.message);

// throw 예시
// const 회원 = '{ "이름": "정용훈", "나이": "15", "성별": "남" }';

// try {
//   const 유저 = JSON.parse(회원);

//   if (!유저.동아리) {
//     throw new SyntaxError(`해당 유저에 동아리가 없습니다.`);
//   }
// } catch (에러) {
//   console.log("JSON Error: " + 에러.message);
// }

// 에러 다시 던지기
// try {
//   에러발생;
// } catch (에러) {
//   console.log("상수에 값을 할당했습니다!" + 에러);
// }

// try {
//   에러발생;
// } catch (에러) {
//   if (에러 instanceof ReferenceError) {
//     console.log("ReferenceError");
//   }
// }

// try {
//   const 유저 = {
//     이름: "정용훈",
//   };

//   if (!유저.이름) {
//     throw new SyntaxError("이름 없음");
//   }

//   예상치못한에러();
//   console.log(유저.이름);
// } catch (에러) {
//   if (에러 instanceof SyntaxError) {
//     console.log("Error : " + 에러.message);
//   } else {
//     throw 에러;
//   }
// }

// const 함수 = () => {
//   const 유저 = {
//     이름: "정용훈",
//     나이: 15,
//   };

//   try {
//     에러발생();
//   } catch (에러) {
//     if (!(에러 instanceof SyntaxError)) {
//       throw 에러;
//     }
//   }
// };

// try {
//   함수();
// } catch (던져진에러) {
//   console.log("던져진 에러 잡음 ㅋㄷ", 던져진에러.message);
// }

// 요약
try {
  // 코드 실행
} catch (에러) {
  // 에러 발생시 여기부터 실행, 남은 try 코드들은 무시
  // 에러는 에러 객체
  // 에러의 이름 작명 가능
} finally {
  // 에러 발생 여부와 상관없이 try/catch 이후 실행됨
}
