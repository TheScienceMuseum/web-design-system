module.exports = {
  title: "Sparkly Buttons",
  status: "wip",
  context: {
    label: "Gizza button!"
  },
  variants: [
    {
      name: "primary",
      context: {
        label: "Primary button!",
        class: "c-btn--primary"
      }
    },
    {
      name: "disabled",
      context: {
        label: "Disabled button",
        class: "c-btn--disabled"
      }
    }
  ]
};
