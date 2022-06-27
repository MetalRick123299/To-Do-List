const path = require("path");

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    open: true,
    hot: true,
    compress: true,
  },
  mode: "development",
};
