import { $, $$ } from "../utils/dom.js";

//lav animation på knap med fyld fra venstra til højre når den slutter sker der noget

//bevæg mus bliver knappen fyldt ud med det samme og animationen slutter og der sker ikke noget før man klikker på knappen
function nextMovie() {
  $(".inner").classList.remove("animation");
  $("body").style.backgroundColor = "cadetblue";
  $(".inner").style.scale = "1 1";
}

function stopAnimation() {
  $(".inner").classList.remove("animation");
  $(".inner").style.scale = "1 1";
}

$(".inner").addEventListener("animationend", nextMovie);

$("body").addEventListener("mousemove", stopAnimation);

$(".container").addEventListener("click", nextMovie);
