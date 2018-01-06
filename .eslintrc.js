module.exports = {
  plugins: [
    "react"
  ],
  extends: [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  // Override default parser so we can take advantage of latest/experimental features
  parser: "babel-eslint", 
};
