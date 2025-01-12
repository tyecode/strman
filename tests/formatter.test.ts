import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  capitalize,
  slugify,
  templateReplace,
} from "@/index.ts";

describe("String Formatter Library", () => {
  test("toCamelCase", () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
  });

  test("toPascalCase", () => {
    expect(toPascalCase("hello world")).toBe("HelloWorld");
  });

  test("toSnakeCase", () => {
    expect(toSnakeCase("hello world")).toBe("hello_world");
  });

  test("toKebabCase", () => {
    expect(toKebabCase("hello world")).toBe("hello-world");
  });

  test("capitalize", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });

  test("slugify", () => {
    expect(slugify("Hello World!")).toBe("hello-world");
  });

  test("templateReplace", () => {
    expect(templateReplace("Hello, {name}!", { name: "John" })).toBe(
      "Hello, John!"
    );
  });
});
