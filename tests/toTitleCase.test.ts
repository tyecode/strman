import { toTitleCase } from "../src/string/toTitleCase";
import { describe, it, expect } from "@jest/globals";

describe("toTitleCase", () => {
  it("should convert a string to title case", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
  });

  it("should capitalize each word", () => {
    expect(toTitleCase("hello world from javascript")).toBe(
      "Hello World From Javascript"
    );
  });

  it("should handle already title cased strings", () => {
    expect(toTitleCase("Hello World")).toBe("Hello World");
  });

  it("should handle empty strings", () => {
    expect(toTitleCase("")).toBe("");
  });
});
