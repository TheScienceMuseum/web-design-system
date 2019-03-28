import accordions from "./components/accordion/accordion.js";
import illuminate from "./components/illuminate/illuminate.js";
// console.log("in main");
document.addEventListener("DOMContentLoaded", function(event) {
  accordions();
  illuminate();
});

// expose as globals for other forms of consumption, under smg object.
window.smg = {};
window.smg.accordions = accordions;
window.smg.illuminate = illuminate;
