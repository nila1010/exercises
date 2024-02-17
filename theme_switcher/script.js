import { $ } from "../utils/dom.js";

let getTheme = localStorage.getItem("theme");
$("body").dataset.theme = getTheme;
$("#ts").value = getTheme;

function changeTheme(parm) {
  localStorage.setItem("theme", parm);
  getTheme = localStorage.getItem("theme");
  $("body").dataset.theme = getTheme;
}

$("#ts").addEventListener("change", (evt) => {
  changeTheme(evt.target.value);
});
