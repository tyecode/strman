import { toCamelCase } from "../src/string/toCamelCase";
import { describe, it, expect } from "@jest/globals";

describe("toCamelCase", () => {
  it("should convert kebab-case to camelCase", () => {
    expect(toCamelCase("hello-world")).toBe("helloWorld");
  });

  it("should convert snake_case to camelCase", () => {
    expect(toCamelCase("hello_world")).toBe("helloWorld");
  });

  it("should handle strings already in camelCase", () => {
    expect(toCamelCase("helloWorld")).toBe("helloWorld");
  });

  it("should handle empty strings", () => {
    expect(toCamelCase("")).toBe("");
  });
});
