import { repeat } from "../src/string/repeat";
import { describe, it, expect } from "@jest/globals";

describe("repeat", () => {
  it("should repeat a string n times", () => {
    expect(repeat("hello", 3)).toBe("hellohellohello");
  });

  it("should return an empty string when the repeat count is 0", () => {
    expect(repeat("hello", 0)).toBe("");
  });

  it("should handle negative numbers by returning an empty string", () => {
    expect(repeat("hello", -1)).toBe("");
  });
});
