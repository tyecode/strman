/**
 * Extracts numbers from a string.
 * @param str - The string to extract numbers from.
 * @returns An array of extracted numbers.
 */
export function extractNumbers(str: string): number[] {
  return (str.match(/\d+/g) || []).map(Number);
}
