import { wordCount } from "../src/string/wordCount";
import { describe, it, expect } from "@jest/globals";

describe("wordCount", () => {
  it("should return the correct number of words in a string", () => {
    expect(wordCount("Hello world")).toBe(2);
  });

  it("should count words correctly with multiple spaces", () => {
    expect(wordCount("Hello   world")).toBe(2);
  });

  it("should return 0 for an empty string", () => {
    expect(wordCount("")).toBe(0);
  });

  it("should count words correctly with punctuation", () => {
    expect(wordCount("Hello, world!")).toBe(2);
  });
});
