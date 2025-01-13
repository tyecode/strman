import { toSnakeCase } from "../src/string/toSnakeCase";
import { describe, it, expect } from "@jest/globals";

describe("toSnakeCase", () => {
  it("should convert camelCase to snake_case", () => {
    expect(toSnakeCase("helloWorld")).toBe("hello_world");
  });

  it("should convert kebab-case to snake_case", () => {
    expect(toSnakeCase("hello-world")).toBe("hello_world");
  });

  it("should handle strings already in snake_case", () => {
    expect(toSnakeCase("hello_world")).toBe("hello_world");
  });

  it("should handle empty strings", () => {
    expect(toSnakeCase("")).toBe("");
  });
});
