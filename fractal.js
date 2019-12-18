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

/*
 * Require Handlebars
 */
const handlebars = require(path.join(__dirname, "handlebars.js"));
const hbs = require("@frctl/handlebars")(handlebars.options);
const engine = fractal.components.engine(hbs);
fractal.docs.engine(hbs);
