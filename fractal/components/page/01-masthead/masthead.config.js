const mologos = require("../../../docs/logos.config");
var variants = [];
for (const [key, value] of Object.entries(mologos.context.logos)) {
  variants.push({ name: key, context: { ...{ slug: key }, ...value } });
}
var context = mologos.context.logos.smg;
context.init =
  "<script>document.addEventListener('DOMContentLoaded', function(event) {smgwds.menu();})</script>";

module.exports = {
  status: "ready",
  preview: "@preview-raw",
  notes: "[todo: define linking rules]",
  context: context,
  default: "smg",
  variants: variants,
};
