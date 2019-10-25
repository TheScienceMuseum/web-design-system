import Plyr from "plyr/dist/plyr.polyfilled.js";

export default function audioplayer() {
  var audioplayer = document.querySelector(".c-audioplayer");
  if (audioplayer !== null) {
    var player = new Plyr(".c-audioplayer audio");
    var button = document.querySelector(".c-audioplayer__button");
    player.on("playing", event => {
      audioplayer.classList.add("c-audioplayer--playing");
      button.setAttribute("aria-label", "Pause audio");
    });
    player.on("pause", event => {
      audioplayer.classList.remove("c-audioplayer--playing");
      button.setAttribute("aria-label", "Play audio");
    });
    player.on("ended", event => {
      audioplayer.classList.remove("c-audioplayer--playing");
      button.setAttribute("aria-label", "Play audio");
    });

    button.addEventListener("click", event => {
      player.togglePlay();
    });
  }
}
