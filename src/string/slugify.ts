/**
 * Slugifies a string.
 * @param str - The string to slugify.
 * @returns The slugified string.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/^-+|-+$/g, "");
}
