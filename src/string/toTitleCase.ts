/**
 * Converts a string to title case.
 * @param str - The string to convert to title case.
 * @returns The title-cased string.
 */
export function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}
