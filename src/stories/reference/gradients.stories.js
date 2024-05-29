import gradients from "../../js/data/gradients.js";
import template from "./gradients.hbs";

export default {
  render: (args) => template(args),
  args: {
    gradients: gradients,
  },
  decorators: [
    (story, context) =>
      `<div class="o-grid o-grid--4-col">
      ${story()}
      </div>`,
  ],
};

export const TwoColour = {
  args: {
    gradients: gradients["2col"],
  },
};

export const ThreeColour = {
  args: {
    gradients: gradients["3col"],
  },
};
