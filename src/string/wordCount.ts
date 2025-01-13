/**
 * Count the number of words in a string.
 * @param str - The string to count words in.
 * @returns The number of words in the string.
 */
export function wordCount(str: string): number {
  if (!str.trim()) return 0;
  return str.trim().split(/\s+/).length;
}
