"use strict";

const path = require("path");
const pkg = require(path.join(__dirname, "package.json"));
const fractal = (module.exports = require("@frctl/fractal").create());
var Fs = require("fs");

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

fractal.components.set("default.preview", "@preview-container");

/**
 * Custom theme
 */
const mandelbrot = require("@frctl/mandelbrot"); // require the Mandelbrot theme module
const myCustomisedTheme = mandelbrot({
  skin: "black",
  styles: ["/css/main.css", "/css/fractal.css"],
  nav: ["docs", "components"] // show docs above components in the sidebar
});
fractal.web.theme(myCustomisedTheme);

const hbs = require("@frctl/handlebars")({
  helpers: {
    uppercase: function(str) {
      return str.toUpperCase();
    }
  },
  partials: {
    // foobar: "This is a partial! live"
  }
  /* other configuration options here */
});

const instance = fractal.components.engine(
  hbs
); /* set as the default template engine for components */
fractal.docs.engine(
  hbs
); /* you can also use the same instance for documentation, if you like! */

instance.handlebars.registerPartial(
  "preview/header",
  Fs.readFileSync("./src/components/_layout/header.hbs", "utf8")
);
instance.handlebars.registerPartial(
  "preview/footer",
  Fs.readFileSync("./src/components/_layout/footer.hbs", "utf8")
);