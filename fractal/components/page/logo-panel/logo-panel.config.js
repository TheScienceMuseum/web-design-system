const logos = require("../../../docs/logos.config");

//except, delete smg (but not from the original object!)
const panellogos = Object.assign({}, logos);
delete panellogos.context.logos.smg;

module.exports = {
  title: "Logo panel (footer)",
  status: "wip",
  preview: "@preview-raw",
  context: {
    strap: "The Science Museum Group",
    links: panellogos.context.logos
  }
};
