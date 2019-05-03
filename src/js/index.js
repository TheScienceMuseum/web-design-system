// this is the one that gets used via npm

export * from "./components/accordion.js";
export * from "./components/illuminate.js";

// expose as globals for other forms of consumption, under smg object.
window.smg = {};
window.smg.accordions = accordions;
window.smg.illuminate = illuminate;
