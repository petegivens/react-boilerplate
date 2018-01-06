// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require("path");

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, "dist"),
  SRC: path.resolve(__dirname, "src")
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.SRC, "index.js"),
  output: {
    path: paths.DIST,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: paths.SRC
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  // Enable importing JS files without specifying their's extenstion
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
