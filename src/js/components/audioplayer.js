import Plyr from "plyr/dist/plyr.polyfilled.js";

export default function audioplayer() {
  var player = new Plyr(".c-audioplayer audio");
  var stateClass = document.querySelector(".c-audioplayer").classList;
  var button = document.querySelector(".c-audioplayer__button");
  player.on("playing", event => {
    stateClass.add("c-audioplayer--playing");
    button.setAttribute("aria-label", "Pause audio");
  });
  player.on("pause", event => {
    stateClass.remove("c-audioplayer--playing");
    button.setAttribute("aria-label", "Play audio");
  });
  player.on("ended", event => {
    stateClass.remove("c-audioplayer--playing");
    button.setAttribute("aria-label", "Play audio");
  });

  button.addEventListener("click", function(e) {
    player.togglePlay();
  });
}
