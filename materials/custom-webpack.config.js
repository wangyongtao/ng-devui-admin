// const webpack = require("webpack");
// module.exports = {
//   module: {
//     rules: [{ test: /\.png$/, use: "file-loader" }],
//   },
// };

export default {
  module: {
    rules: [
      { test: /\.png$/, use: 'file-loader' },
    ],
  },
};