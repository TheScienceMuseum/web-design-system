"use strict";

const path = require("path");
const pkg = require(path.join(__dirname, "package.json"));
const fractal = (module.exports = require("@frctl/fractal").create());
var Fs = require("fs");

fractal.set("project.title", "Science Museum Group: Web Design System");
// Provide the package.json "version" to the templates
fractal.set("project.version", pkg.version);

/**
 * Files location
 */
fractal.components.set("path", path.join(__dirname, "fractal/components"));
fractal.docs.set("path", path.join(__dirname, "fractal/docs"));
fractal.web.set("static.path", path.join(__dirname, "public"));
fractal.web.set("builder.dest", __dirname + "/dist");

/**
 * Server configuration
 */
fractal.web.set("server.port", 4000);
fractal.web.set("server.sync", true);
fractal.web.set("debug", true);

fractal.components.set("default.preview", "@preview-container");

/**
 * Custom theme
 */

// const mandelbrot = require("@frctl/mandelbrot"); // require the Mandelbrot theme module
const mySubTheme = require("./fractal/theme");

// const myCustomisedTheme = mandelbrot({
//   skin: "black",
//   styles: ["/css/main.css", "/css/fractal.css"],
//   nav: ["docs", "components"], // show docs above components in the sidebar
//   panels: panels
// });
fractal.web.theme(mySubTheme);

const hbs = require("@frctl/handlebars")({
  helpers: {
    uppercase: function(str) {
      return str.toUpperCase();
    }
  },
  partials: {
    foobar: "This is a partial! live",
    fullwidth: "</div><div>",
    endfullwidth: '</div><div class="o-textstyles Prose">'
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
  Fs.readFileSync("./fractal/components/_layout/header.hbs", "utf8")
);
instance.handlebars.registerPartial(
  "preview/footer",
  Fs.readFileSync("./fractal/components/_layout/footer.hbs", "utf8")
);
