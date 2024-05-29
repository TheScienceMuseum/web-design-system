import template from "./pagination.hbs";

export default {
  render: (args) => template(args),
};

export const Default = {
  args: {
    pagination: {
      isFirst: true,
      isLast: false,
      links: {
        pages: [
          {
            pageNumber: 1,
            isCurrent: true,
          },
          {
            pageNumber: 2,
          },
          {
            pageNumber: 3,
          },
          {
            pageNumber: 4,
          },
          {
            pageNumber: 5,
          },
          {
            pageNumber: 6,
          },
          {
            pageNumber: 7,
          },
          {
            pageNumber: 8,
          },
          null,
          { pageNumber: 19, isCurrent: false },
        ],
      },
    },
  },
};

export const Short = {
  args: {
    pagination: {
      isFirst: false,
      isLast: false,
      links: {
        pages: [
          {
            pageNumber: 1,
          },
          {
            pageNumber: 2,
            isCurrent: true,
          },
          {
            pageNumber: 3,
          },
        ],
      },
    },
  },
};

export const Last = {
  args: {
    pagination: {
      isFirst: false,
      isLast: true,
      links: {
        pages: [
          {
            pageNumber: 16,
          },
          {
            pageNumber: 17,
          },
          {
            pageNumber: 18,
          },
          {
            pageNumber: 19,
            isCurrent: true,
          },
        ],
      },
    },
  },
};
