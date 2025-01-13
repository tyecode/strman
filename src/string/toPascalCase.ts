/**
 * Converts a string to pascal case.
 * @param str - The string to convert to pascal case.
 * @returns The pascal-case string.
 */
export function toPascalCase(str: string): string {
  return str
    .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace(/[-_]/, ""))
    .replace(/^\w/, (c) => c.toUpperCase());
}
