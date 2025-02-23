import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Disable this rule
      "@typescript-eslint/no-unused-vars": "warn", // Change to warning instead of error
      "@next/next/no-img-element": "off" // Optional: Disable <img> warning
    }
  }
];

export default eslintConfig;
