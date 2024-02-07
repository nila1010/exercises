import { $, $$ } from "../utils/dom.js";
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

function generateCrumb() {
  bc.forEach((crumb, i) => {
    if (i === bc.length - 1) {
      $("nav").innerHTML += crumb.name;
    } else {
      $("nav").innerHTML += `<a href=${crumb.link}>${crumb.name}</a>` + " / ";
    }
  });
}

$("button").addEventListener("click", generateCrumb);
