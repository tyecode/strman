import { pad } from "../src/string/pad";
import { describe, it, expect } from "@jest/globals";

describe("pad", () => {
  it("should pad a string to a given length with a specified character", () => {
    expect(pad("hello", 10, "*")).toBe("hello*****");
  });

  it("should pad with default character when not specified", () => {
    expect(pad("hello", 10)).toBe("hello     ");
  });

  it("should handle padding to a smaller length", () => {
    expect(pad("hello", 3, "*")).toBe("hello");
  });

  it("should handle empty string input", () => {
    expect(pad("", 5, "*")).toBe("*****");
  });

  it("should handle zero length", () => {
    expect(pad("hello", 0, "*")).toBe("hello");
  });

  it("should handle negative length", () => {
    expect(pad("hello", -5, "*")).toBe("hello");
  });

  it("should handle padding with multi-character string", () => {
    expect(pad("hello", 10, "ab")).toBe("helloababa");
  });

  it("should handle padding with empty character string", () => {
    expect(pad("hello", 10, "")).toBe("hello");
  });
});
