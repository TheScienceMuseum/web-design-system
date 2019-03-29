module.exports = {
  title: "Buttons",
  status: "wip",
  collated: true, // show all variants on one page
  context: {
    label: "Gizza button!",
    theme: "blue"
  },
  variants: [
    {
      name: "Themed",
      context: {
        label: "Purple button!",
        theme: "purple",
        class: "c-btn--purple"
      }
    },
    {
      name: "Themed2",
      context: {
        label: "Orange button!",
        theme: "xxx",
        class: "c-btn--orange"
      }
    },
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
