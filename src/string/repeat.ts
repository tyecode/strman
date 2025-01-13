/**
 * Repeats a string a specified number of times.
 * @param str - The string to repeat.
 * @param times - The number of times to repeat the string.
 * @returns The repeated string.
 */
export function repeat(str: string, times: number): string {
  if (times <= 0) return "";
  return str.repeat(times);
}
