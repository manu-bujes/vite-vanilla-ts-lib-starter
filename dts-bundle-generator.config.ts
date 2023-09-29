// eslint-disable-next-line @typescript-eslint/no-var-requires

const config = {
  entries: [
    {
      filePath: "./src/index.ts",
      outFile: `./dist/lib.d.ts`,
      noCheck: false,
    },
  ],
};

module.exports = config;
