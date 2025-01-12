const replaceChars = (
  str: string,
  pattern: RegExp,
  replacer: (char: string) => string
): string => str.replace(pattern, (_, char) => (char ? replacer(char) : ""));

export const toCamelCase = (str: string): string =>
  replaceChars(str, /[-_\s.]+(.)?/g, (char) => char.toUpperCase()).replace(
    /^./,
    (char) => char.toLowerCase()
  );

export const toPascalCase = (str: string): string =>
  replaceChars(str, /[-_\s.]+(.)?/g, (char) => char.toUpperCase()).replace(
    /^./,
    (char) => char.toUpperCase()
  );

export const toSnakeCase = (str: string): string =>
  str.replace(/\s+/g, "_").toLowerCase();

export const toKebabCase = (str: string): string =>
  str.replace(/\s+/g, "-").toLowerCase();

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const slugify = (str: string): string =>
  str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // Remove invalid chars
    .replace(/\s+/g, "-") // Collapse whitespace
    .replace(/-+/g, "-"); // Collapse dashes

export const templateReplace = (
  template: string,
  values: Record<string, string>
): string => {
  return template.replace(/{(.*?)}/g, (_, key) => values[key] || `{${key}}`);
};
