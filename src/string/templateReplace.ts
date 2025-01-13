/**
 * Replaces placeholders in a string template with values from an object.
 * @param template - The string template with placeholders.
 * @param data - The object containing placeholder values.
 * @returns The string with placeholders replaced.
 */
export function templateReplace(
  template: string,
  data: Record<string, string>
): string {
  return template.replace(
    /{{\s*(\w+)\s*}}/g,
    (_, key) => data[key] || `{{${key}}}`
  );
}
