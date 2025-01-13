import { isPalindrome } from "../src/string/isPalindrome";
import { describe, it, expect } from "@jest/globals";

describe("isPalindrome", () => {
  it("should return true for a palindrome string", () => {
    expect(isPalindrome("madam")).toBe(true);
  });

  it("should return false for a non-palindrome string", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("should handle case-insensitive strings", () => {
    expect(isPalindrome("Madam")).toBe(true);
  });

  it("should handle empty strings", () => {
    expect(isPalindrome("")).toBe(true);
  });
});
