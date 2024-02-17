import { $, $$ } from "../utils/dom.js";

const body = $("body");
body.addEventListener("mousemove", changeColor);

function changeColor(evt) {
  console.log(evt.screenX / window.innerWidth);
  body.style.setProperty("--x", `${evt.screenX / 10}%`);
  body.style.setProperty("--y", `${evt.screenY / 10}%`);
}

// /innerheightwidth og innerhigeht.

// toFixed kan bruges til at bestemmer hvor mange decimaler der skal vises fx to.Fixed(5) viser 5 decimaler
