import template from "./choice.hbs";

export default {
  render: (args) => template(args),
};

export const Block = {
  args: {
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
};

export const Inline = {
  args: {
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
};
