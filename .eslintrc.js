/** @type {import('@types/eslint').Linter.BaseConfig}*/
module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "prettier"],
  plugins: [],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
