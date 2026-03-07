import { caesarCipher } from "./index.js";

test("abc with shift factor 2 should be cde", () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});

test("jkl with shift factor 3 should be mno", () => {
  expect(caesarCipher("jkl", 3)).toBe("mno");
});

test("hello, bird with shift factor 3 should be khoor, elug", () => {
  expect(caesarCipher("hello, bird", 3)).toBe("khoor, elug");
});

test("HeLLo with shift factor 3 should be KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("xyz with shift factor 3 should be abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
