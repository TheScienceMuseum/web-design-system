const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "../../src/assets/icons");
var icons = [];
fs.readdir(directoryPath, function(err, files) {
  if (err) {
    return console.log("Unable to read directory: " + err);
  }
  var svgs = files.filter(name => name.match(".svg"));

  svgs.forEach(function(file) {
    icons.push(file.replace(".svg", ""));
  });
});

module.exports = {
  context: {
    icons: icons
  }
};
