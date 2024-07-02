/** @type { import('@storybook/html').Preview } */
import "../src/scss/main.scss";
import { DocsTheme } from "./themes";

const preview = {
  // tags: ["autodocs"]
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: DocsTheme,
    },
  },

  tags: ["autodocs"]
};

export default preview;
