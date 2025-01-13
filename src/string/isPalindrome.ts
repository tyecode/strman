/**
 * Checks if a string is a palindrome.
 * @param str - The string to check for palindrome.
 * @returns True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str: string): boolean {
  const cleaned = str.replace(/[\W_]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}
