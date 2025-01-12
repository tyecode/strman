
# @tyecode/strman

A lightweight library for string formatting and transformation, built in TypeScript. It provides various utilities for manipulating string cases, formatting strings, and more.

## Features

- Convert strings between camelCase, PascalCase, snake_case, kebab-case, and other formats.
- Slugify strings for URL-friendly output.
- Template string replacement for dynamic content.
- Easily extensible with more string transformation methods.

## Installation

You can install `@tyecode/strman` via `npm`, `yarn` or `pnpm`:

```bash
# Using npm
npm install @tyecode/strman

# Using yarn
yarn add @tyecode/strman

# Using pnpm
pnpm add @tyecode/strman
```

## Usage

Import the functions you need from the package:

```typescript
import { toCamelCase, toPascalCase, toSnakeCase, toKebabCase, capitalize, slugify, templateReplace } from '@tyecode/strman';

console.log(toCamelCase('hello_world'));  // helloWorld
console.log(toPascalCase('hello_world')); // HelloWorld
console.log(toSnakeCase('HelloWorld'));   // hello_world
console.log(toKebabCase('HelloWorld'));   // hello-world
console.log(capitalize('hello'));         // Hello
console.log(slugify('Hello World!'));    // hello-world
console.log(templateReplace('Hello {name}!', { name: 'Tye' })); // Hello Tye!
```

## API

### `toCamelCase(str: string): string`
Converts a string to camelCase.

### `toPascalCase(str: string): string`
Converts a string to PascalCase.

### `toSnakeCase(str: string): string`
Converts a string to snake_case.

### `toKebabCase(str: string): string`
Converts a string to kebab-case.

### `capitalize(str: string): string`
Capitalizes the first letter of the string.

### `slugify(str: string): string`
Converts a string to a slug format (lowercase and hyphen-separated).

### `templateReplace(template: string, values: object): string`
Replaces placeholders in the template string with values from the provided object.

## Development

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/tyecode/strman.git
    cd strman
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```

3. Build the project:
    ```bash
    pnpm run build
    ```

4. Run tests:
    ```bash
    pnpm run test
    ```

### Linting

To lint the project:

```bash
pnpm run lint
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new Pull Request.

## License

MIT License. See [LICENSE](./LICENSE) for more information.
