import template from "./select.hbs";
export default {
  render: (args) => template(args),
  args: {
    options: [
      { value: "optval1", label: "Option one" },
      { value: "optval2", label: "Option two", selected: true },

      { value: "optval3", label: "Option three" },

      { value: "optval4", label: "Option four" },
    ],
  },
  parameters: {
    layout: "centered",
  },
};

export const Default = {};

//responds to font-size
export const Scaled = {
  args: {
    style: "font-size: 1rem;",
  },
};
