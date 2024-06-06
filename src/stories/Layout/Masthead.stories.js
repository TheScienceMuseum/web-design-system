import logos from "../../js/data/logos";
import template from "./masthead.hbs";

var variants = {};
for (const [key, value] of Object.entries(logos)) {
  variants[key] = { slug: key, ...value };
}

// console.log("variants", Object.keys(variants));

export default {
  render: (args) => template(args),
  parameters: {
    layout: "fullscreen",
  },
  args: {
    site: variants["smg"],
  },
  argTypes: {
    site: {
      control: {
        type: "select",
      },
      options: Object.keys(variants),
      mapping: variants,
    },
  },
};

export const Masthead = {};
