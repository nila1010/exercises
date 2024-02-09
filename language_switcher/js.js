"use strict";
import { $, $$ } from "../utils/dom.js";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale;

$(".language").addEventListener("change", (event) => {
  locale = `${event.target.value}`;
  texts[locale].texts.forEach((each) => {
    $(each.location).textContent = each.text;
  });
});
