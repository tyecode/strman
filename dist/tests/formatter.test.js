"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("String Formatter Library", () => {
    test("toCamelCase", () => {
        expect((0, src_1.toCamelCase)("hello world")).toBe("helloWorld");
    });
    test("toPascalCase", () => {
        expect((0, src_1.toPascalCase)("hello world")).toBe("HelloWorld");
    });
    test("toSnakeCase", () => {
        expect((0, src_1.toSnakeCase)("hello world")).toBe("hello_world");
    });
    test("toKebabCase", () => {
        expect((0, src_1.toKebabCase)("hello world")).toBe("hello-world");
    });
    test("capitalize", () => {
        expect((0, src_1.capitalize)("hello world")).toBe("Hello world");
    });
    test("slugify", () => {
        expect((0, src_1.slugify)("Hello World!")).toBe("hello-world");
    });
    test("templateReplace", () => {
        expect((0, src_1.templateReplace)("Hello, {name}!", { name: "John" })).toBe("Hello, John!");
    });
});
