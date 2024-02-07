import { $, $$ } from "../utils/dom.js";
import { getRandomNum } from "../utils/number.js";

const list = document.querySelector("ul");
const myArray = [];
let nIntervId;

function makeBars() {
  const randnum = getRandomNum(100);
  const li = document.createElement("li");
  li.style.setProperty("--height", randnum);
  list.appendChild(li);
  myArray.push(randnum);

  if (myArray.length - 1 > 19) {
    list.removeChild(list.firstElementChild);
    myArray.shift();
  }
}

function startAnimation(evt) {
  if (evt.target.dataset.filter === "start") {
    if (!nIntervId) {
      nIntervId = setInterval(makeBars, 1000);
    }
  } else {
    clearInterval(nIntervId);
    nIntervId = null;
  }
}
$$("button").forEach((btn) => {
  btn.addEventListener("click", startAnimation);
});
