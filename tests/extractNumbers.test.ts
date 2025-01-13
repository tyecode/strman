import { extractNumbers } from "../src/string/extractNumbers";
import { describe, it, expect } from "@jest/globals";

describe("extractNumbers", () => {
  it("should extract numbers from a string", () => {
    expect(extractNumbers("abc123def456")).toEqual([123, 456]);
  });

  it("should return an empty array if no numbers are found", () => {
    expect(extractNumbers("abcdef")).toEqual([]);
  });

  it("should handle an empty string", () => {
    expect(extractNumbers("")).toEqual([]);
  });
});
