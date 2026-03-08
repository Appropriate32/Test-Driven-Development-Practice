import { analyzeArray } from "./index.js";

test("average should be 3", () => {
  const result = analyzeArray([1, 3, 5]);
  expect(result.average).toBeCloseTo(3);
});

test("average should be 10", () => {
  const result = analyzeArray([5, 15]);
  expect(result.average).toBeCloseTo(10);
});

test("min should be 2", () => {
  const result = analyzeArray([5, 2, 10, 20, 30]);
  expect(result.min).toBe(2);
});

test("min should be -5", () => {
  const result = analyzeArray([1, 10, 2, -5, 3, 100]);
  expect(result.min).toBe(-5);
});

test("max should be 2000", () => {
  const result = analyzeArray([4, 100, 35, 2000, 1000, -5]);
  expect(result.max).toBe(2000);
});

test("max should be 1000", () => {
  const result = analyzeArray([4, 100, 35, 500, 1000, -5]);
  expect(result.max).toBe(1000);
});

test("length should be 5", () => {
  const result = analyzeArray([5, 99, 32, 8, -9]);
  expect(result.length).toBe(5);
});

test("length should be 3", () => {
  const result = analyzeArray([0, 45, 96]);
  expect(result.length).toBe(3);
});
