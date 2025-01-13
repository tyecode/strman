import { toPascalCase } from "../src/string/toPascalCase";
import { describe, it, expect } from "@jest/globals";

describe("toPascalCase", () => {
  it("should convert kebab-case to PascalCase", () => {
    expect(toPascalCase("hello-world")).toBe("HelloWorld");
  });

  it("should convert snake_case to PascalCase", () => {
    expect(toPascalCase("hello_world")).toBe("HelloWorld");
  });

  it("should handle strings already in PascalCase", () => {
    expect(toPascalCase("HelloWorld")).toBe("HelloWorld");
  });

  it("should handle empty strings", () => {
    expect(toPascalCase("")).toBe("");
  });
});
