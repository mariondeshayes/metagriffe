/** @type {import("prettier").Config} */
export default {
  bracketSameLine: true,
  jsxBracketSameLine: true,
  htmlWhitespaceSensitivity: "ignore",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
