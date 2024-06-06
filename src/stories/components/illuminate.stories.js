import illuminate from "../../js/components/illuminate.js";

export default {
  render: (args) => `<h1 class="js-illuminate">${args.text}</h1>`,
};

document.addEventListener("DOMContentLoaded", () => {
  illuminate();
  illuminate({ selector: ".custom-class" });
});

export const Default = {
  args: {
    text: "ILLUMINATED TEXT",
  },
};

export const CustomSelector = {
  render: (args) => `<h1 class="custom-class">${args.text}</h1>`,
  args: {
    text: "Using a custom selector",
  },
};

export const WrappingText = {
  args: {
    text: "So much text that it wraps onto two lines or maybe <br/> includes line-breaks. This is a perfect example of something that should be a web component.",
  },
};
