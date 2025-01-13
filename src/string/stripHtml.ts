/**
 * Removes HTML tags from a string.
 * @param str - The string to remove HTML tags from.
 * @returns The string without HTML tags.
 */
export function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}
