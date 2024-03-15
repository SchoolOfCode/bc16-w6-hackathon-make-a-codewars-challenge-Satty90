import { describe, expect, test } from "vitest";
import { vowelCounter } from "./main.js";

describe("testing vowelCounter function", () => {
  test("testing nine letter input", () => {
    const word = "recognise";
    const result = 4;

    expect(vowelCounter(word)).toEqual(result);
  });

  test("testing nine letter input", () => {
    const word = "available";
    const result = 5;

    expect(vowelCounter(word)).toEqual(result);
  });

  test("testing nine letter input", () => {
    const word = "subscribe";
    const result = 3;

    expect(vowelCounter(word)).toEqual(result);
  });

  test("testing nine letter input", () => {
    const word = "currently";
    const result = 2;

    expect(vowelCounter(word)).toEqual(result);
  });

  test("testing input for less or more than 9 characters", () => {
    const word = "hello";

    expect(() => vowelCounter(word)).toThrowError("undefined input");
  });

  test("testing input for string", () => {
    const word = 12;

    expect(() => vowelCounter(word)).toThrowError("undefined input");
  });
});
