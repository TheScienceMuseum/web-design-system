"use strict";

const path = require("path");
const pkg = require(path.join(__dirname, "package.json"));
const fractal = (module.exports = require("@frctl/fractal").create());

fractal.set("project.title", "Science Museum Group style guide");
// Provide the package.json "version" to the templates
fractal.set("project.version", pkg.version);

/**
 * Files location
 */
fractal.components.set("path", path.join(__dirname, "src/components"));
fractal.docs.set("path", path.join(__dirname, "docs"));
fractal.web.set("static.path", path.join(__dirname, "public"));
fractal.web.set("builder.dest", __dirname + "/build");

fractal.components.set("default.preview", "@preview");

/**
 * Custom theme
 */
const mandelbrot = require("@frctl/mandelbrot"); // require the Mandelbrot theme module
const myCustomisedTheme = mandelbrot({
  skin: "black",
  styles: ["default", "/css/fractal.css"],
  nav: ["docs", "components"] // show docs above components in the sidebar
});
fractal.web.theme(myCustomisedTheme);
