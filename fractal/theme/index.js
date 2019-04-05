"use strict";

const mandelbrot = require("@frctl/mandelbrot");

/*
 * Configure the theme
 */
// const subTheme = mandelbrot({
//   styles: ["/subtheme/css/main.css"],
//   format: "yaml",
//   nav: ["docs", "components"],
//   favicon: "/subtheme/favicon.ico"
// });

//  show these panels in production:
var panels = ["notes", "html", "view"];
// Add these panels for dev only
if (process.env.ENV == "development") {
  panels.push("context", "resources", "info");
}

const subTheme = mandelbrot({
  skin: "blue",
  styles: ["/css/main.css", "/subtheme/css/main.css"],
  nav: ["docs", "components"], // show docs above components in the sidebar
  panels: panels
});

/*
 * Specify a template directory to override any view templates
 */
subTheme.addLoadPath(__dirname + "/views");

/*
 * Specify the static assets directory that contains the custom stylesheet.
 */
subTheme.addStatic(__dirname + "/static", "/subtheme");

/*
 * Export the customised theme instance so it can be used in Fractal projects
 */
module.exports = subTheme;
