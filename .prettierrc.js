module.exports = {
  trailingComma: "all",
  importOrder: [
    "^(?!(@|[./])).*",
    "^@(hooks|utils)(.*)$",
    "^@(components|views|store)(.*)$",
    "^@(icons)(.*)$",
    "^[./]",
    "^.*$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
