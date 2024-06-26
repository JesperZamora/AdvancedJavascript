import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz, calculateAvg } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("FizzBuzz", () => {
  it("n % 3 === 0 && n % 5 === 0 return FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("n % 3 === 0 return Fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("n % 5 === 0 return Buzz", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("n.toString()", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});

describe("Calculate Avg", () => {
  it("Should return NaN if given an empty array", () => {
    expect(calculateAvg([])).toBe(NaN);
  });

  it("Should calculate avg of an array with a single element", () => {
    expect(calculateAvg([1])).toBe(1);
  });

  it("Should calculate avg of an array with two elements", () => {
    expect(calculateAvg([1, 2])).toBe(1.5);
  });
});
