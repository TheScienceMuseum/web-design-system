import { create } from "@storybook/theming/create";
import brandImage from "../src/stories/assets/smg-sb-header.svg";
export const DocsTheme = create({
  base: "light",

  // Typography
  fontBase: '"SMGSans", sans-serif',
  fontCode: "monospace",

  //
  // colorPrimary: "#ff00aa",
  // colorSecondary: "#585C6D",
});

export const ManagerTheme = create({
  base: "dark",
  brandTitle: "SMG Web Design System",
  // brandUrl: 'https://example.com',
  brandImage: brandImage,
  // brandTarget: '_self',

  // Typography
  // fontBase: '"SMGSans", sans-serif',
  // fontCode: "monospace",

  //
  // colorPrimary: "#ff00aa",
  // colorSecondary: "#585C6D",
});
