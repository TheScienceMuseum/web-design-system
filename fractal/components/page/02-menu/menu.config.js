module.exports = {
  status: "ready",
  preview: "@preview-container",
  notes: "The 'menu' is just the ul of links, will always be inside a 'nav'",
  context: {
    class: "c-menu--global",
    items: [
      {
        url: "https://www.sciencemuseumgroup.org.uk/",
        name: "About us"
      },
      {
        url: "https://collection.sciencemuseumgroup.org.uk/",
        name: "Collections"
      },
      {
        url: "https://www.sciencemuseumgroup.org.uk/",
        name: "Learning"
      },
      {
        url: "#",
        name: "Visit us",
        items: [
          { url: "http://www.sciencemuseum.org.uk", name: "Science Museum" },
          {
            url: "https://www.scienceandmediamuseum.org.uk",
            name: "National Science and Media Museum"
          },
          {
            url: "https://www.scienceandindustrymuseum.org.uk",
            name: "Science and Industry Museum"
          },
          {
            url: "http://www.railwaymuseum.org.uk",
            name: "National Railway Museum"
          },
          { url: "https://www.locomotion.org.uk/", name: "Locomotion" }
        ]
      }
    ]
  },
  variants: [
    {
      name: "blog",
      context: {
        items: [
          {
            url: "https://www.sciencemuseumgroup.org.uk/",
            name: "A blog link"
          },
          {
            url: "https://www.sciencemuseumgroup.org.uk/",
            name: "Another blog link"
          }
        ]
      }
    },

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
