const logos = require("../../../docs/logos.config");

var links = {};
Object.keys(logos.context.logos).forEach(function (item) {
  if (item != "smg" && item != "ncc") {
    links[item] = logos.context.logos[item];
  }
});

module.exports = {
  title: "Logo panel (footer)",
  status: "wip",
  preview: "@preview-raw",
  context: {
    strap: "The Science Museum Group",
    links: links,
  },
};
