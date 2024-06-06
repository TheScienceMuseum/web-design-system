import template from "./property-list.hbs";
export default {
  render: (args) => template(args),
  args: {
    properties: [
      {
        key: "KEY:",
        value:
          "Value. The ideal layout for these lists gives the key jsut enough space for it's content, then the remainder of the space is given to the value. the length of the value may change dynamically without causing reflow.",
      },
      {
        key: "CATEGORY:",
        value: "Passenger Comforts",
      },
      { key: "OBJECT NUMBER:", value: "1994-7816" },
      { key: "MATERIALS:", value: "ceramic (unspecified)" },
      { key: "TYPE:", value: "chamber pot" },
      { key: "CREDIT:", value: "British Rail, Clapham" },
    ],
  },
  argTypes: {
    class: {
      control: {
        type: "inline-radio",
      },
      options: ["[none]", "--ruled:above", "--ruled:between"],
    },
    properties: {
      control: {
        type: "object",
      },
    },
  },
};
export const Default = {
  args: {},
};
export const Ruled = {
  args: {
    class: "--ruled:above",
  },
};
