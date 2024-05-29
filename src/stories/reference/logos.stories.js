import logos from "../../js/data/logos.js";
import template from "./logos.hbs";
import aligned from "./logos-aligned.hbs";
import "./examplegrid.scss";

export default {
  args: {
    logos: logos,
  },
};

export const Default = {
  render: (args) => template(args),
};

export const VerticalAligned = {
  render: (args) => aligned(args),
};
