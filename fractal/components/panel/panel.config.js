module.exports = {
  collated: true, // show all variants on one page

  context: {
    html: "<h2>A panel</h2><p>Various html elements might go in here</p>"
  },
  variants: [
    {
      name: "lighter",
      notes: "Stacked panels get lighter.",
      context: { html: "a subsequent lighter panel", class: "c-panel--lighter" }
    },
    {
      name: "evenlighter",
      context: { html: "a subsequent lighter panel", class: "c-panel--lighter" }
    }
  ]
};
