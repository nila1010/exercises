import { $, $$ } from "../utils/dom.js";

const userInput = $("#userinput");
const output = $("#output");
let inputBox;

function generator() {
  const input = userInput.value;
  const firstName = input.split(" ");
  if (inputBox === "opt1") {
    const firstLetteCap = `${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`;
    if (firstLetteCap.includes(" ")) {
      output.value = "Du skal indtaste kun Firstname";
    } else output.value = firstLetteCap;
  } else if (inputBox === "opt2") {
    if (input.includes(" ")) {
      output.value = firstName[0];
    } else output.value = "Du har ikke indtastet et fuldt navn";
  } else if (inputBox === "opt3") {
    const lengthFirstName = firstName[0].length;
    if (input.includes(" ")) {
      output.value = "Længden af fornavnet er " + lengthFirstName;
    } else output.value = "Du har ikke indtastet et fuldt navn";
  } else if (inputBox === "opt4") {
    const firstPos = input.indexOf(" ") + 1;
    const lastPos = input.lastIndexOf(" " - 1);
    const middleName = input.substring(firstPos, lastPos);
    if (input.includes(" ")) {
      output.value = "Mellemnavnet er fra position " + firstPos + " - " + (lastPos + 1) + " Mellemnavnet er " + middleName;
    } else output.value = "Du har ikke indtastet et fuldt navn med mellemnavn";
  } else if (inputBox === "opt5") {
    if (input.endsWith(".jpg") || input.endsWith(".png")) {
      output.value = true;
    } else output.value = "Du har ikke indtastet et filnavn af typen png eller jpg";
  } else if (inputBox === "opt6") {
    const unknown = "*";
    output.value = unknown.repeat(input.length);
  } else if (inputBox === "opt7") {
    const thirdCarUpper = `${input.substring(0, 2)}${input[2].toUpperCase()}${input.slice(3)}`;
    output.value = thirdCarUpper;
  } else if (inputBox === "opt8") {
    if (input.includes("-")) {
      const indexBeforeSymbol = input.indexOf("-");
      const upperCase = `${input.substring(0, indexBeforeSymbol + 1)}${input[indexBeforeSymbol + 1].toUpperCase()}${input.substring(indexBeforeSymbol + 2)}`;
      output.value = upperCase;
      // split det på " " og kørt det igennem et loop og brug i
    } else if (input.includes(" ")) {
      const indexBeforeSymbol = input.indexOf(" ");
      const upperCase = `${input.substring(0, indexBeforeSymbol + 1)}${input[indexBeforeSymbol + 1].toUpperCase()}${input.substring(indexBeforeSymbol + 2)}`;
      output.value = upperCase;
    } else {
      output.value = "Du skal indtaste noget med mellemrum eller -";
    }
  } else output.value = "Du skal vælge en option";
}

$("button").addEventListener("click", (event) => {
  inputBox = $(".option").value;
  generator();
});
