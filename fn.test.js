const fn = require("./fn");

test("1은 1입니다.", () => {
  expect(1).toBe(1);
}); // pass

test("2 더하기 3은 5입니다.", () => {
  expect(fn.add(2, 3)).toBe(5);
}); // pass

test("2 더하기 3은 5입니다.", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

test("3 더하기 3은 5가 아니다.", () => {
  expect(fn.add(3, 3)).not.toBe(5);
}); // pass

test("이름과 나이를 전달 받아서 객체를 반환합니다.", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
}); // pass

test("이름과 나이를 전달 받아서 객체를 반환합니다.", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
}); // fail

// toBeNull
// toBeUndefined
// toBeDefined

test("null은 null입니다.", () => {
  expect(null).toBeNull();
}); // pass

// toBeTruthy
// toBeFalsy
test("0은 false입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
}); // pass

test("비어있지 않은 문자열은 true입니다.", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
}); // pass

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다
// 아이디 길이 제한 / 업로드된 파일의 크기가 적당한지 판단할 때 사용

test("ID는 10자 이하여야 합니다.", () => {
  const id = "THE_BLACK_ORDER";
  expect(id.length).toBeLessThanOrEqual(10);
}); // fail

test("ID는 10자 이하여야 합니다.", () => {
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
}); // pass

test("비밀먼호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
}); // pass

test("0.1 더하기 0.2는 0.3입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBe(0.3);
}); // fail ... 0.30000000000000004

test("0.1 더하기 0.2는 0.3입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
}); // pass

test("Hello World에 a라는 글자가 있습니까?", () => {
  expect("Hello World").toMatch(/h/i);
}); // pass

// toContain
test("유저 리스트에 Mike가 있습니까?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
}); // fail

test("에러가 발생합니까?", () => {
  expect(() => fn.throwErr()).toThrow();
}); // pass

test("에러가 발생합니까?", () => {
  expect(() => fn.throwErr()).toThrow("oo");
}); // fail

test("에러가 발생합니까?", () => {
  expect(() => fn.throwErr()).toThrow("xx");
}); // pass
