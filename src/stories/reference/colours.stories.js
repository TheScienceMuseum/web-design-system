import palettes from "../../js/data/colours.js";
import template from "./colours.hbs";

export default {
  render: (args) => template(args),
  args: {
    palettes: palettes,
  },
  decorators: [
    (story, context) =>
      `<div class="o-grid o-grid--4-col">
      ${story()}
      </div>`,
  ],
};

// console.log({ ...icons });

export const Default = {};
