import { toKebabCase } from "../src/string/toKebabCase";
import { describe, it, expect } from "@jest/globals";

describe("toKebabCase", () => {
  it("should convert camelCase to kebab-case", () => {
    expect(toKebabCase("helloWorld")).toBe("hello-world");
  });

  it("should convert snake_case to kebab-case", () => {
    expect(toKebabCase("hello_world")).toBe("hello-world");
  });

  it("should handle strings already in kebab-case", () => {
    expect(toKebabCase("hello-world")).toBe("hello-world");
  });

  it("should handle empty strings", () => {
    expect(toKebabCase("")).toBe("");
  });
});
