module.exports = {
  title: "Pagination",
  status: "wip",
  context: {
    pagination: {
      isFirst: true,
      isLast: false,
      links: {
        pages: [
          {
            pageNumber: 1,
            isCurrent: true
          },
          {
            pageNumber: 2
          },
          {
            pageNumber: 3
          },
          {
            pageNumber: 4
          },
          {
            pageNumber: 5
          },
          {
            pageNumber: 6
          },
          {
            pageNumber: 7
          },
          {
            pageNumber: 8
          },
          null,
          { pageNumber: 19, isCurrent: false }
        ]
      }
    }
  },
  variants: [
    {
      name: "Short",
      context: {
        pagination: {
          isFirst: false,
          isLast: false,
          links: {
            pages: [
              {
                pageNumber: 1
              },
              {
                pageNumber: 2,
                isCurrent: true
              },
              {
                pageNumber: 3
              },
              {
                pageNumber: 4
              }
            ]
          }
        }
      }
    },
    {
      name: "Last page",
      context: {
        pagination: {
          isFirst: false,
          isLast: true,
          links: {
            pages: [
              {
                pageNumber: 1
              },
              {
                pageNumber: 2
              },
              {
                pageNumber: 3
              },
              {
                pageNumber: 4,
                isCurrent: true
              }
            ]
          }
        }
      }
    }
  ]
};
