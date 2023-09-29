/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";

const packageName = 'lib';


const fileName = {
  es: `${packageName}.mjs`,
  cjs: `${packageName}.cjs`,
  iife: `${packageName}.iife.js`,
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

module.exports = defineConfig({
  base: "./",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: 'ManuBujesViteVanillaTsLib',
      formats,
      fileName: (format) => fileName[format],
    },
  },
  test: {

  }
});
