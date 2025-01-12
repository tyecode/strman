"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateReplace = exports.slugify = exports.capitalize = exports.toKebabCase = exports.toSnakeCase = exports.toPascalCase = exports.toCamelCase = void 0;
const toCamelCase = (str) => str
    .replace(/[-_\s.]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ""))
    .replace(/^./, (char) => char.toLowerCase());
exports.toCamelCase = toCamelCase;
const toPascalCase = (str) => str
    .replace(/[-_\s.]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ""))
    .replace(/^./, (char) => char.toUpperCase());
exports.toPascalCase = toPascalCase;
const toSnakeCase = (str) => str.replace(/\s+/g, "_").toLowerCase();
exports.toSnakeCase = toSnakeCase;
const toKebabCase = (str) => str.replace(/\s+/g, "-").toLowerCase();
exports.toKebabCase = toKebabCase;
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
exports.capitalize = capitalize;
const slugify = (str) => str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // Remove invalid chars
    .replace(/\s+/g, "-") // Collapse whitespace
    .replace(/-+/g, "-"); // Collapse dashes
exports.slugify = slugify;
const templateReplace = (template, values) => {
    return template.replace(/{(.*?)}/g, (_, key) => values[key] || `{${key}}`);
};
exports.templateReplace = templateReplace;
