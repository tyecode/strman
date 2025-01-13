import { slugify } from "../src/string/slugify";
import { describe, it, expect } from "@jest/globals";

describe("slugify", () => {
  it("should convert spaces to hyphens", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("should convert uppercase letters to lowercase", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("should remove special characters", () => {
    expect(slugify("Hello @World!")).toBe("hello-world");
  });
});
