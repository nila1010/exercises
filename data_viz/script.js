//90 -270

import { $, $$ } from "../utils/dom.js";

setInterval(() => {
  fetch("https://kea-alt-del.dk/kata-distortion/")
    .then((response) => response.json())
    .then((jsonData) => {
      $("h1").textContent = jsonData.inQueue;
      $(".container").style.transform = `rotate(${90 + jsonData.inQueue * 9}deg)`;
      $(":root").style.setProperty("--value", jsonData.inQueue * 10);
    });
}, 10000);
