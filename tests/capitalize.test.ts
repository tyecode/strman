import { capitalize } from "../src/string/capitalize";
import { describe, it, expect } from "@jest/globals";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should not change a string that is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("should handle empty strings", () => {
    expect(capitalize("")).toBe("");
  });
});
