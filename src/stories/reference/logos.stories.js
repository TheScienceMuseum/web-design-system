import logos from "../../js/data/logos.js";
import template from "./logos.hbs";
import aligned from "./logos-aligned.hbs";
import "./examplegrid.scss";
import { reverse } from "core-js/core/array";

export default {
  args: {
    logos: logos,
    alignTop: false,
    reversed: false,
  },
  argTypes: {
    alignTop: {
      control: {
        type: "boolean",
      },
    },
    reversed: {
      control: {
        type: "boolean",
      },
    },
  }, tags: ['!autodocs'],
};

export const Logos = {
  render: (args) => template(args),
};
