/** @type {import("prettier").Config} */
module.exports = {
  quoteProps: "preserve",
  trailingComma: "es5",
  printWidth: 100,

  overrides: [
    {
      files: "**/*.{css,sass,scss,yml,yaml}",
      options: {
        singleQuote: true,
      },
    },
  ],
};
