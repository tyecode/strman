/**
 * Reverses a string.
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
export function reverse(str: string): string {
  return str.split("").reverse().join("");
}
