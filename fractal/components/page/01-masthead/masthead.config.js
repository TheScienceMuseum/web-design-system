const mologos = require("../../../docs/logos.config");
var variants = [];
for (const [key, value] of Object.entries(mologos.context.logos)) {
  variants.push({ name: key, context: { ...{ slug: key }, ...value } });
}
module.exports = {
  status: "ready",
  preview: "@preview-raw",
  notes: "[todo: define linking rules]",
  context: mologos.context.logos.smg,
  default: "smg",
  variants: variants
};
