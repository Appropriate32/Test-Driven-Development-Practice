import { reverseString } from "./index.js";

test("converts 'hello' to 'olleh'", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("converts 'what' to 'tahw'", () => {
  expect(reverseString("what")).toBe("tahw");
});

test("converts 'House' to 'esuoH'", () => {
  expect(reverseString("House")).toBe("esuoH");
});
