import { templateReplace } from "../src/string/templateReplace";
import { describe, it, expect } from "@jest/globals";

describe("templateReplace", () => {
  it("should replace placeholders in a string", () => {
    expect(templateReplace("Hello, {{name}}!", { name: "John" })).toBe(
      "Hello, John!"
    );
  });

  it("should handle missing placeholder replacements", () => {
    expect(templateReplace("Hello, {{name}}!", {})).toBe("Hello, {{name}}!");
  });

  it("should handle multiple replacements", () => {
    expect(
      templateReplace("Hello, {{firstName}} {{lastName}}!", {
        firstName: "John",
        lastName: "Doe",
      })
    ).toBe("Hello, John Doe!");
  });
});
