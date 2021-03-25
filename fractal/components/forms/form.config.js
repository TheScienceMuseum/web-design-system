module.exports = {
  title: "Forms",
  status: "wip",
  context: {
    field1: { fieldtype: "select" },
    field2: {
      fieldtype: "textinput",
      label: "A text field",
      fieldContext: { value: " " },
    },
    field3: { fieldtype: "choice" },
    button: { label: "submit", class: "c-btn--primary c-btn--green" },
  },
};
