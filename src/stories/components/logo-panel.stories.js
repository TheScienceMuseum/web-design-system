import template from "./logo-panel.hbs";
import logos from "../../js/data/logos";

export default {
  render: (args) => template(args),
  parameters: {
    layout: "fullscreen",
  },
};

const visibleLogos = {};
Object.keys(logos).forEach(function (item) {
  if (item != "smg" && item != "ncc") {
    visibleLogos[item] = logos[item];
  }
});

export const Default = {
  args: {
    strap: "The Science Museum Group",
    logos: visibleLogos,
  },
};
