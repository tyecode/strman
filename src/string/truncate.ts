/**
 * Truncates a string to a specified length.
 * @param str - The string to truncate.
 * @param length - The maximum length of the truncated string.
 * @param ellipsis - The string to append to the truncated string (default: "...").
 * @returns The truncated string.
 */
export function truncate(
  str: string,
  length: number,
  ellipsis: string = "..."
): string {
  if (str.length <= length) {
    return str;
  }
  const words = str.split(" ");
  let result = words[0];
  if (result.length > length) {
    return str.slice(0, length - ellipsis.length) + ellipsis;
  }
  return result + ellipsis;
}
