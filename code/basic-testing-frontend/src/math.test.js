import { it, expect } from "vitest";
import { add } from "./math";

it("this should summarize all number values in an array", () => {
  // arrange
  const numbers = [1, 2, 3];

  // act
  const result = add(numbers);

  // assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  // arrange
  const numbers = ["invalid", 1];

  // act
  const result = add(numbers);

  // assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  // arrange
  const numbers = [["1", "2", "3"]];

  // act
  const result = add(numbers);
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );

  // assert
  expect(result).toBeNaN(expectedResult);
});
