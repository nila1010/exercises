import { $, $$ } from "../utils/dom.js";

const userInput = $("#userinput");
const output = $("#output");
let inputBox;

function generator() {
  const input = userInput.value;
  if (inputBox === "opt1") {
    const firstLetteCap = `${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`;
    if (firstLetteCap.includes(" ")) {
      output.value = "Du skal indtaste kun Firstname";
    } else output.value = firstLetteCap;
  } else if (inputBox === "opt2") {
    console.log(inputBox);
  } else if (inputBox === "opt3") {
    console.log(inputBox);
  } else if (inputBox === "opt4") {
    console.log(inputBox);
  } else if (inputBox === "opt5") {
    console.log(inputBox);
  } else if (inputBox === "opt6") {
    console.log(inputBox);
  } else if (inputBox === "opt7") {
    console.log(inputBox);
  } else if (inputBox === "opt8") {
    console.log(inputBox);
  } else outputText = "Du skal vælge en option";
}

$("button").addEventListener("click", (event) => {
  inputBox = $(".option").value;
  generator();
});
