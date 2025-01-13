import { reverse } from "../src/string/reverse";
import { describe, it, expect } from "@jest/globals";

describe("reverse", () => {
  it("should reverse a string", () => {
    expect(reverse("hello")).toBe("olleh");
  });

  it("should handle an empty string", () => {
    expect(reverse("")).toBe("");
  });

  it("should handle single character strings", () => {
    expect(reverse("a")).toBe("a");
  });
});
