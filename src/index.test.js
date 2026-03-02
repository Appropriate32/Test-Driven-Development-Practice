import { capitalize } from "./index.js";

test("converts 'hello' to 'Hello'", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("converts 'hi' to 'Hello' ", () => {
  expect(capitalize("hi")).toBe("Hi");
});
