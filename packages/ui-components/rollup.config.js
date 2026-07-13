import path from "node:path";
import { fileURLToPath } from "node:url";

import alias from "@rollup/plugin-alias";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkg = { input: "src/index.ts" };

const aliasEntries = [
  { find: "@root", replacement: __dirname },
  {
    find: "@components",
    replacement: path.resolve(__dirname, "src/components"),
  },
  { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
  { find: "@helpers", replacement: path.resolve(__dirname, "src/helpers") },
];

export default [
  {
    input: pkg.input,
    plugins: [
      alias({ entries: aliasEntries }),
      image(),
      resolve({
        preferBuiltins: false,
        extensions: [".mjs", ".js", ".json", ".node", ".ts"],
      }),
      esbuild({
        target: "es2020",
        minify: false,
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
    output: [
      {
        dir: "dist",
        format: "es",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    external: ["lit", "lit/html", "lit/decorators.js"],
  },
  {
    input: "src/index.ts",
    plugins: [dts({ tsconfig: path.resolve(__dirname, "tsconfig.json") })],
    output: {
      dir: "dist",
      format: "es",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
  },
];
