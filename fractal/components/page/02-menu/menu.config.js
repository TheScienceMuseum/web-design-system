module.exports = {
  status: "ready",
  preview: "@preview-container",
  // notes: "[todo: define linking rules]",
  context: {
    background: "grey",
    init:
      "<script>document.addEventListener('DOMContentLoaded', function(event) {smgwds.menu();})</script>",

    items: [
      {
        url: "https://www.sciencemuseumgroup.org.uk/",
        name: "A single link"
      },
      {
        url: "https://www.sciencemuseumgroup.org.uk/",
        name: "Another link",
        items: [
          {
            url: "https://www.sciencemuseumgroup.org.uk/",
            name: "A child link with a long title that wraps"
          },
          {
            url: "https://www.sciencemuseumgroup.org.uk/",
            name: "Another child link",
            items: [
              {
                url: "https://www.sciencemuseumgroup.org.uk/",
                name: "level 3!"
              },
              {
                url: "https://www.sciencemuseumgroup.org.uk/",
                name: "Another child link"
              },
              {
                url: "https://www.sciencemuseumgroup.org.uk/",
                name: "Another child link"
              }
            ]
          },
          {
            url: "https://www.sciencemuseumgroup.org.uk/",
            name: "Another child link"
          }
        ]
      },
      {
        url: "https://www.sciencemuseumgroup.org.uk/",
        name: "A single link"
      }
    ]
  }
};
