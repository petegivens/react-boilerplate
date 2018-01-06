module.exports = {
  plugins: [
    "react",
    "jsx-a11y"
  ],
  extends: [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  // Override default parser so we can take advantage of latest/experimental features
  parser: "babel-eslint",
  rules: {
    "class-methods-use-this": 0
  }
};
