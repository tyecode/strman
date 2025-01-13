/**
 * Pads a string with a character to a certain length.
 * @param str - The string to pad.
 * @param length - The total length of the output string.
 * @param char - The character to pad with (default: " ").
 * @returns The padded string.
 */
export function pad(str: string, length: number, char: string = " "): string {
  const padLength = Math.max(0, length - str.length);
  const padding = char.repeat(padLength);
  return str + padding.slice(0, padLength);
}
