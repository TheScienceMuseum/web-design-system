module.exports = {
  collated: true, // show all variants on one page

  context: {
    html:
      "<h2>A panel</h2><p>Generally used in the sidebar</p><p>Various html elements might go in here</p>"
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
    },
    {
      name: "lightest",
      context: {
        html:
          "A panel with a light background. This might be used in main page to highlight an area of content.",
        class: "c-panel--light"
      }
    }
  ]
};
