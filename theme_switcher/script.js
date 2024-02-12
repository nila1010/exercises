import { $ } from "../utils/dom.js";

function changeTheme(theme) {
  $("body").dataset.theme = theme;
}

$("#ts").addEventListener("change", (event) => {
  changeTheme(event.target.value);
});
