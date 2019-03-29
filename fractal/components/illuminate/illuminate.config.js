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
        class: "custom-class",
        init:
          "<script>document.addEventListener('DOMContentLoaded', function(event) {smg.illuminate({selector: '.custom-class'})})</script>"
      }
    }
  ]
};
