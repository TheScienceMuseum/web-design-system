module.exports = {
  title: "Illuminate",
  status: "wip",
  notes: "[todo: clarify limited use cases]",
  tags: ["js"],
  collated: true, // show all variants on one page
  context: {
    text: "ILLUMINATED TEXT",
    class: "js-illuminate"
  },
  variants: [
    {
      name: "Custom selector",
      context: {
        text: "Using a custom selector",
        class: "custom-class"
      }
    },
    {
      name: "Wrapping text ",
      context: {
        text:
          "So much text that it wraps onto two lines or maybe <br/> includes line-breaks",
        init:
          "<script>document.addEventListener('DOMContentLoaded', function(event) {smgwds.illuminate();smgwds.illuminate({selector: '.custom-class'})})</script>"
      }
    }
  ]
};
