import css from "@eslint/css";
import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import type { Linter } from "eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

const importSortRules: Linter.RulesRecord = {
  "simple-import-sort/imports": [
    "error",
    {
      groups: [
        ["^node:"],
        [
          "^@(?!root(?:/|$)|components(?:/|$)|styles(?:/|$)|helpers(?:/|$))\\w",
          "^\\w",
        ],
        ["^@(?:root|components|styles|helpers)(?:/|$)"],
        ["^\\."],
      ],
    },
  ],
  "simple-import-sort/exports": "error",
};

export default defineConfig([
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/storybook-static/**",
      "**/coverage/**",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, "simple-import-sort": simpleImportSort },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: importSortRules,
  },
  {
    files: ["**/*.{ts,mts,cts}"],
    extends: tseslint.configs.recommended,
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: { "simple-import-sort": simpleImportSort },
    rules: importSortRules,
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
  eslintPluginPrettierRecommended,
]);
