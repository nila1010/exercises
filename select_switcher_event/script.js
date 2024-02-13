document.querySelector("select").addEventListener("change", selectChange);
let currentCol = "orange";
function selectChange(evt) {
  currentCol = evt.target.value;
  console.log(evt.target.value);
  document.querySelector("body").classList.add("ani");
  document.querySelector(":root").style.setProperty("--bg-color", currentCol);
  document.querySelector("body").addEventListener("animationend", reset);
  console.log("change", evt.target.value);
}

function reset() {
  document.querySelector("body").classList.remove("ani");
  document.querySelector("body").style.backgroundColor = currentCol;
}
