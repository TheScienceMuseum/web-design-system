module.exports = {
  status: "wip",

  context: {
    label: "Field label",
    fieldtype: "textinput",
    fieldContext: { value: "optional passed context" },
  },
  variants: [
    {
      name: "With select",
      context: { label: "Select Field label", fieldtype: "select" },
    },
    {
      name: "With description",
      context: {
        label: "Field label",
        description: "This field has some useful description text",
      },
    },
    {
      name: "With error",
      context: {
        label: "Field label",
        error: "That's not an acceptable value",
      },
    },
    {
      name: "With error and description",
      context: {
        label: "Field label",
        description: "This field has some useful description text",
        error: "But it's all gone terribly wrong",
      },
    },
    {
      name: "With choices",
      context: {
        label: "Field label",
        fieldtype: "choice",
      },
    },
  ],
};
