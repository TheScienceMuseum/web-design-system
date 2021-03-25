module.exports = {
  status: "wip",
  context: {
    inline: false,
    choices: [
      {
        input: "checkbox",
        label:
          "The choice thing is useful for when there is a long label, so long the text might possibly wrap.",
      },
      {
        input: "radio",
        label: "It can contain radios or checkboxes",
        group: "radiogroupname",
      },
      {
        input: "radio",
        label: "It can contain radios or checkboxes",
        group: "radiogroupname",
      },
    ],
  },
  variants: [
    {
      name: "Inline",
      context: {
        inline: true,
        choices: [
          {
            input: "checkbox",
            label: "Short labels",
          },
          {
            input: "radio",
            label: "Yes",
            group: "radiogroupname",
          },
          {
            input: "radio",
            label: "No",
            group: "radiogroupname",
          },
        ],
      },
    },
  ],
};
