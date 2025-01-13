/**
 * Converts a string to camel case.
 * @param str - The string to convert to camel case.
 * @returns The camel-case string.
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace(/[-_]/, ""))
    .replace(/^\w/, (c) => c.toLowerCase());
}
