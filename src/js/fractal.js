// this gets used by fractal only, includes the polyfills that would need to be done elsewhere

import accordions from "./components/accordion.js";
import audioplayer from "./components/audioplayer.js";
import illuminate from "./components/illuminate.js";

export default {
  accordions,
  audioplayer,
  illuminate
};

import svg4everybody from "svg4everybody";
svg4everybody();

import objectFitImages from "object-fit-images";
objectFitImages();
