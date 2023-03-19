module.exports = {
  pluginSearchDirs: false,
  plugins: [require.resolve("prettier-plugin-organize-imports"), require.resolve("prettier-plugin-packagejson")],
  printWidth: 120,
  singleQuote: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: "*.md",
      options: {
        proseWrap: "preserve",
      },
    },
  ],
};
