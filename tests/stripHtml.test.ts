import { stripHtml } from "../src/string/stripHtml";
import { describe, it, expect } from "@jest/globals";

describe("stripHtml", () => {
  it("should remove HTML tags from a string", () => {
    expect(stripHtml("<p>Hello World</p>")).toBe("Hello World");
  });

  it("should handle strings without HTML tags", () => {
    expect(stripHtml("Hello World")).toBe("Hello World");
  });

  it("should handle empty strings", () => {
    expect(stripHtml("")).toBe("");
  });
});
