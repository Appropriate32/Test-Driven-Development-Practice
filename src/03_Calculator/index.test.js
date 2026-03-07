import { calculator } from "./index.js";

test("5 + 6 should return 11", () => {
  expect(calculator.add(5, 6)).toBe(11);
});

test("3 - 5 should return -2", () => {
  expect(calculator.subtract(3, 5)).toBe(-2);
});

test("10 - 5 should return 5", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("5 * 4 should return 20", () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});

test("8 * 5 should return 40", () => {
  expect(calculator.multiply(8, 5)).toBe(40);
});

test("9 / 3 should return 3", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test("15 / 3 should return 5", () => {
  expect(calculator.divide(15, 3)).toBe(5);
});
