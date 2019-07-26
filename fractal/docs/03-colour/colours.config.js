var colorable = require("colorable");
// sadly, these design tokens are repeated values from the scss map. a job for https://github.com/salesforce-ux/theo ?
var palettes = {
  red: {
    name: "$c-red",
    hex: "#e60060",
    text: "white"
  },
  orange: {
    name: "$c-orange",
    hex: "#ec6408",
    text: "white"
  },
  yellow: {
    name: "$c-yellow",
    hex: "#ffee00",
    text: "black"
  },
  green: {
    name: "$c-green",
    hex: "#95c11f",
    text: "black"
  },
  teal: {
    name: "$c-teal",
    hex: "#4bbecf",
    text: "black"
  },
  blue: {
    name: "$c-blue",
    hex: "#004899",
    text: "white"
  },
  purple: {
    name: "$c-purple",
    hex: "#af1280",
    text: "white"
  }
};

var colorableOptions = {
  compact: true,
  threshold: 0
};

for (var palette in palettes) {
  colorablePalette = [palettes[palette].hex, palettes[palette].text];
  var colorableResult = colorable(colorablePalette, colorableOptions);
  palettes[palette].colorable = colorableResult[0].combinations[0];
}
// console.log(palettes.purple.colorable);

module.exports = {
  context: {
    palettes: palettes,
    greys: {
      black: {
        name: "Black",
        hex: "#000"
      }
    }
  }
};
