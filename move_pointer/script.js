import { $, $$ } from "../utils/dom.js";

const body = $("body");
body.addEventListener("mousemove", changeColor);

function changeColor(evt) {
  console.log(evt.screenX);
  body.style.setProperty("--x", `${evt.screenX / 10}%`);
  body.style.setProperty("--y", `${evt.screenY / 10}%`);
}
