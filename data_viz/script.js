//90 -270

import { $, $$ } from "../utils/dom.js";
import { fetchData } from "../utils/fetch.js";

const data = await fetchData("https://kea-alt-del.dk/kata-distortion/");
$("h1").textContent = data.inQueue;
$(".container").style.transform = `rotate(${7.5 * data.inQueue + 82.5}deg)`;
$(":root").style.setProperty("--value", data.inQueue * 10);

setInterval(async () => {
  const data = await fetchData("https://kea-alt-del.dk/kata-distortion/");
  $("h1").textContent = data.inQueue;
  $(".container").style.transform = `rotate(${7.5 * data.inQueue + 82.5}deg)`;
  $(":root").style.setProperty("--value", data.inQueue * 10);
}, 10000);
