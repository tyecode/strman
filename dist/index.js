'use strict';

const replaceChars = (str, pattern, replacer) => str.replace(pattern, (_, char) => (char ? replacer(char) : ""));
const toCamelCase = (str) => replaceChars(str, /[-_\s.]+(.)?/g, (char) => char.toUpperCase()).replace(/^./, (char) => char.toLowerCase());
const toPascalCase = (str) => replaceChars(str, /[-_\s.]+(.)?/g, (char) => char.toUpperCase()).replace(/^./, (char) => char.toUpperCase());
const toSnakeCase = (str) => str.replace(/\s+/g, "_").toLowerCase();
const toKebabCase = (str) => str.replace(/\s+/g, "-").toLowerCase();
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const slugify = (str) => str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // Remove invalid chars
    .replace(/\s+/g, "-") // Collapse whitespace
    .replace(/-+/g, "-"); // Collapse dashes
const templateReplace = (template, values) => {
    return template.replace(/{(.*?)}/g, (_, key) => values[key] || `{${key}}`);
};

exports.capitalize = capitalize;
exports.slugify = slugify;
exports.templateReplace = templateReplace;
exports.toCamelCase = toCamelCase;
exports.toKebabCase = toKebabCase;
exports.toPascalCase = toPascalCase;
exports.toSnakeCase = toSnakeCase;
