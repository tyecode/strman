/**
 * Capitalizes the first letter of a string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Extracts numbers from a string.
 * @param str - The string to extract numbers from.
 * @returns An array of extracted numbers.
 */
function extractNumbers(str) {
    return (str.match(/\d+/g) || []).map(Number);
}

/**
 * Checks if a string is a palindrome.
 * @param str - The string to check for palindrome.
 * @returns True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    const cleaned = str.replace(/[\W_]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
}

/**
 * Pads a string with a character to a certain length.
 * @param str - The string to pad.
 * @param length - The total length of the output string.
 * @param char - The character to pad with (default: " ").
 * @returns The padded string.
 */
function pad(str, length, char = " ") {
    const padLength = Math.max(0, length - str.length);
    const padding = char.repeat(padLength);
    return str + padding.slice(0, padLength);
}

/**
 * Repeats a string a specified number of times.
 * @param str - The string to repeat.
 * @param times - The number of times to repeat the string.
 * @returns The repeated string.
 */
function repeat(str, times) {
    if (times <= 0)
        return "";
    return str.repeat(times);
}

/**
 * Reverses a string.
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
function reverse(str) {
    return str.split("").reverse().join("");
}

/**
 * Slugifies a string.
 * @param str - The string to slugify.
 * @returns The slugified string.
 */
function slugify(str) {
    return str
        .toLowerCase()
        .replace(/[\s_]+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/^-+|-+$/g, "");
}

/**
 * Removes HTML tags from a string.
 * @param str - The string to remove HTML tags from.
 * @returns The string without HTML tags.
 */
function stripHtml(str) {
    return str.replace(/<[^>]*>/g, "");
}

/**
 * Replaces placeholders in a string template with values from an object.
 * @param template - The string template with placeholders.
 * @param data - The object containing placeholder values.
 * @returns The string with placeholders replaced.
 */
function templateReplace(template, data) {
    return template.replace(/{{\s*(\w+)\s*}}/g, (_, key) => data[key] || `{{${key}}}`);
}

/**
 * Converts a string to camel case.
 * @param str - The string to convert to camel case.
 * @returns The camel-case string.
 */
function toCamelCase(str) {
    return str
        .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace(/[-_]/, ""))
        .replace(/^\w/, (c) => c.toLowerCase());
}

/**
 * Converts a string to kebab case.
 * @param str - The string to convert to kebab case.
 * @returns The kebab-case string.
 */
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, "-")
        .replace(/_/g, "-")
        .toLowerCase();
}

/**
 * Converts a string to pascal case.
 * @param str - The string to convert to pascal case.
 * @returns The pascal-case string.
 */
function toPascalCase(str) {
    return str
        .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace(/[-_]/, ""))
        .replace(/^\w/, (c) => c.toUpperCase());
}

/**
 * Converts a string to snake case.
 * @param str - The string to convert to snake case.
 * @returns The snake-case string.
 */
function toSnakeCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .replace(/\s+/g, "_")
        .replace(/-/g, "_")
        .toLowerCase();
}

/**
 * Converts a string to title case.
 * @param str - The string to convert to title case.
 * @returns The title-cased string.
 */
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

/**
 * Truncates a string to a specified length.
 * @param str - The string to truncate.
 * @param length - The maximum length of the truncated string.
 * @param ellipsis - The string to append to the truncated string (default: "...").
 * @returns The truncated string.
 */
function truncate(str, length, ellipsis = "...") {
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

/**
 * Count the number of words in a string.
 * @param str - The string to count words in.
 * @returns The number of words in the string.
 */
function wordCount(str) {
    if (!str.trim())
        return 0;
    return str.trim().split(/\s+/).length;
}

export { capitalize, extractNumbers, isPalindrome, pad, repeat, reverse, slugify, stripHtml, templateReplace, toCamelCase, toKebabCase, toPascalCase, toSnakeCase, toTitleCase, truncate, wordCount };
