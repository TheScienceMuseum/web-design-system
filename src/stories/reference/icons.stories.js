import icons from "../../js/data/icons.js";
import template from "./icons.hbs";
import "./examplegrid.scss";

export default {
  render: (args) => template(args),
  args: {
    icons: Object.keys(icons),
  },
};

// console.log({ ...icons });

export const Default = {
  decorators: [
    (story, context) =>
      `<div class="Examplegrid Examplegrid--wrap">
      ${story()}
      </div>`,
  ],
};

export const Reversed = {
  decorators: [
    (story, context) =>
      `<div class="Examplegrid Examplegrid--wrap Examplegrid--reversed" style="background: black;">
      ${story()}
      </div>`,
  ],
};
