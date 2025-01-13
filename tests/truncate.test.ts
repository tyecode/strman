import { truncate } from "../src/string/truncate";
import { describe, it, expect } from "@jest/globals";

describe("truncate", () => {
  it("should truncate a string to a given length", () => {
    expect(truncate("hello world", 5)).toBe("hello...");
  });

  it("should not truncate if the string is shorter than the given length", () => {
    expect(truncate("hello", 10)).toBe("hello");
  });

  it("should handle truncating at the middle of the string", () => {
    expect(truncate("hello world", 8)).toBe("hello...");
  });

  it("should handle empty strings", () => {
    expect(truncate("", 5)).toBe("");
  });
});
