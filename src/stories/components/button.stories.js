import template from "./button.hbs";
import React from "react";

export default {
  render: (args) => template(args),
  // tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    theme: {
      control: { type: "select" },
      options: ["red", "orange", "yellow", "green", "teal", "blue", "purple"],
    },
    parentTheme: {
      control: { type: "select" },
      options: ["red", "orange", "yellow", "green", "teal", "blue", "purple"],
    },
    disabled: { control: "boolean", defaultValue: false },
  },
};

export const Default = {
  args: {
    label: "Purple button label",
    theme: "purple",
  },
};

export const ThemeInherited = {
  args: {
    label: "Purple button label",
    parentTheme: "purple",
    theme: null,
  },
  render: (args) => template(args),
  decorators: [
    (story, context) =>
      `<section class="t-btn--${context.args.parentTheme}">${story()}</section>`,
  ],
};

export const WithIcon = {
  args: {
    label: "Orange button with icon",
    theme: "orange",
    icon: "arrow-right-bold",
  },
};

export const Disabled = {
  args: {
    label: "Disabled button",
    theme: "orange",
    icon: "",
    disabled: true,
  },
};
