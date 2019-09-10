import Plyr from "plyr/dist/plyr.polyfilled.js";

export default function audioplayer() {
  var player = new Plyr(".c-audioplayer audio");
  var stateClass = document.querySelector(".c-audioplayer").classList;
  player.on("playing", event => {
    stateClass.add("c-audioplayer--playing");
  });
  player.on("pause", event => {
    stateClass.remove("c-audioplayer--playing");
  });
  player.on("ended", event => {
    stateClass.remove("c-audioplayer--playing");
  });

  var button = document.querySelector(".c-audioplayer__button");
  button.addEventListener("click", function(e) {
    player.togglePlay();
  });
}
