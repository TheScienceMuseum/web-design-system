module.exports = {
  title: "Buttons",
  status: "wip",
  collated: true, // show all variants on one page
  collator: function(markup, item) {
    // wrap the standard collated output in a <p> - this should be extracted to a shared config perhaps?
    return `<p><!-- Start: @${item.handle} -->\n${markup}\n<!-- End: @${
      item.handle
    } -->\n</p>`;
  },
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
        label: "Orange button with icon!",
        theme: "xxx",
        class: "c-btn--orange",
        icon: "arrow-right-bold"
      }
    },
    {
      name: "Themed3",
      context: {
        label: "yellow icon!",
        theme: "xxx",
        class: "c-btn--yellow",
        icon: "video"
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
