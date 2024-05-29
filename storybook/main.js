/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],

  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    {
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {},
              },
            ],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "sass-loader",
                options: {
                  implementation: require.resolve("sass"),
                  sassOptions: {
                    includePaths: ["./node_modules"],
                  },
                },
              },
            ],
          },
          {
            test: /\.hbs$/,
            loader: "handlebars-loader",
            options: {
              helperDirs: [__dirname + "/../src/stories/helpers"],
            },
          },
        ],
      },
    },
    "@storybook/addon-mdx-gfm",
  ],

  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },

  docs: {},
};
export default config;
