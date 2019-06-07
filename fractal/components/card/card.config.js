module.exports = {
  griditem: "top level",
  label: "Card",
  status: "ready",
  preview: "@preview-grid",
  // display: {
  //   "max-width": "640px",
  //   "min-width": "320px"
  // },
  context: {
    griditem: "4-col",
    title: "Conserving the collection",
    info: `
      <div>By Ruth Watson</div>
      <a href="https://blog.sciencemuseum.org.uk/conserving-the-collection/"><time class="date" datetime="2019-02-27T16:02:23+00:00" itemprop="datePublished">27 February 2019</time></a>`,
    desc:
      "Go behind the scenes with our conservation team and discover what it takes to prepare to move 300,000 objects to their new home.",
    img:
      "https://blog.sciencemuseum.org.uk/wp-content/uploads/2019/02/1857-0101_0001-512x384.png"
  },
  variants: [
    {
      name: "list view",
      notes: "This variant used in non-column setings like search results",
      context: { griditem: null, info: null, variant: "c-card--list" }
    }
  ]
};
