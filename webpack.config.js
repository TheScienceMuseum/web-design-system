const path = require("path");

module.exports = (env, argv) => {
  let devMode = argv.mode !== "production";
  return {
    mode: process.env.NODE_ENV,
    resolve: {
      modules: [path.resolve(__dirname, "src/js"), "node_modules"],
      extensions: [".js"]
    },
    entry: {
      index: path.resolve(__dirname, "src/js/index.js")
    },
    output: {
      // path: devMode
      //   ? path.resolve(__dirname, "public")
      //   : path.resolve(__dirname, "dist"),
      path: path.resolve(__dirname, "public"),
      publicPath: devMode ? "/" : "",
      filename: "js/[name].js",
      library: "smgwds",
      libraryTarget: "umd",
      libraryExport: "default"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    plugins: [],
    devServer: {
      hot: true,
      disableHostCheck: true,
      historyApiFallback: true,
      compress: true,
      proxy: {
        "**": "http://localhost:4000"
      },
      port: 3000,
      stats: {
        colors: true
      },
      overlay: true
    }
  };
};
