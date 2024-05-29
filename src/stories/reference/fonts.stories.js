import template from "./fonts.hbs";

export default {
  render: (args) => template(args),
};

export const Default = {
  args: {
    fonts: [
      { name: "Thin", weight: "100", style: "normal" },
      { name: "ThinItalic", weight: "100", style: "italic" },
      { name: "Light", weight: "300", style: "normal" },
      { name: "LightItalic", weight: "300", style: "italic" },
      { name: "Regular", weight: "normal", style: "normal" },
      { name: "RegularItalic", weight: "normal", style: "italic" },
      { name: "Medium", weight: "500", style: "normal" },
      { name: "MediumItalic", weight: "500", style: "italic" },
      { name: "Bold", weight: "700", style: "normal" },
      { name: "BoldItalic", weight: "700", style: "italic" },
      { name: "Fat", weight: "900", style: "normal" },
    ],
  },
};
