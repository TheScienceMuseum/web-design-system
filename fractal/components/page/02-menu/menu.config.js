module.exports = {
  status: "ready",
  preview: "@preview-container",
  notes: "[the 'menu' is jsut the ul of links, will be inside a 'nav']",
  context: {
    class: "c-menu--global",
    items: [
      {
        url: "https://www.sciencemuseumgroup.org.uk/",
        name: "About us"
      },
      {
        url: "https://www.sciencemuseumgroup.org.uk/",
        name: "Collections"
      },
      {
        url: "https://www.sciencemuseumgroup.org.uk/",
        name: "Learning"
      },
      {
        url: "https://www.sciencemuseumgroup.org.uk/",
        name: "Visit us",
        items: [
          {
            url: "https://www.sciencemuseumgroup.org.uk/",
            name: "A child link with a long title that wraps"
          },
          {
            url: "https://www.sciencemuseumgroup.org.uk/",
            name: "Another child link"
          }
        ]
      }
    ]
  },
  variants: [
    {
      name: "sitenav",
      context: {
        class: "c-menu--site",
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
    }
  ]
};
