const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  let devMode = argv.mode !== "production";
  return {
    mode: process.env.NODE_ENV,
    resolve: {
      modules: [path.resolve(__dirname, "src/js"), "node_modules"],
      extensions: [".js"],
    },
    entry: {
      index: path.resolve(__dirname, "src/js/index.js"),
      accordion: path.resolve(__dirname, "src/js/components/accordion.js"),
      illuminate: path.resolve(__dirname, "src/js/components/illuminate.js"),
      audioplayer: path.resolve(__dirname, "src/js/components/audioplayer.js"),
      menu: path.resolve(__dirname, "src/js/components/menu.js"),
      main: "./src/scss/main.scss",
    },
    output: {
      path: devMode
        ? path.resolve(__dirname, "public")
        : path.resolve(__dirname, "dist"),
      publicPath: devMode ? "/" : "",
      filename: "js/[name].js",
      library: "smgwds",
      libraryTarget: "umd",
      libraryExport: "default",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: 3,
                    debug: false,
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [require("autoprefixer")(), require("cssnano")()],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  includePaths: ["./node_modules"],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),
    ],
  };
};
