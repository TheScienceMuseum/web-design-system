const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  let devMode = argv.mode !== "production";
  return {
    mode: process.env.NODE_ENV,
    resolve: {
      modules: [path.resolve(__dirname, "src/js"), "node_modules"],
      extensions: [".js"]
    },
    entry: {
      index: path.resolve(__dirname, "src/js/index.js"),
      fractal: path.resolve(__dirname, "src/js/fractal.js"),
      main: "./src/scss/main.scss"
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
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [require("autoprefixer")(), require("cssnano")()]
              }
            },
            {
              loader: "sass-loader",
              options: {
                includePaths: ["node_modules"]
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].css"
      })
    ],
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
