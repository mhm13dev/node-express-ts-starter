// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const prettierConfig = require("eslint-config-prettier");

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  prettierConfig,
  {
    files: ["src/**/*.ts", "src/**/*.js"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      semi: "error",
    },
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "commonjs",
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
);
