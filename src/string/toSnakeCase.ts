/**
 * Converts a string to snake case.
 * @param str - The string to convert to snake case.
 * @returns The snake-case string.
 */
export function toSnakeCase(str: string): string {
return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/\s+/g, "_")
    .replace(/-/g, "_")
    .toLowerCase();
}
