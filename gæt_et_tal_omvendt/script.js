import { $, $$ } from "../utils/dom.js";

const btnStart = $("#btnstart");
const btnLower = $("#btn1");
const btnGuessed = $("#btn2");
const btnHigher = $("#btn3");
const compGuessText = $("h2");

let compGuess = 50;
let min = 0;
let max = 100;
let count = 0;

function guessNumber(min, max) {
  return Math.round((max - min) / 2 + min);
}

function guessHigher(min, max) {
  compGuess = guessNumber(min, max);
  btnHigher.removeEventListener("click", higherClick);
  startSpil();
}
function guessLower(min, max) {
  compGuess = guessNumber(min, max);
  btnLower.removeEventListener("click", lowerClick);
  startSpil();
}

function higherClick() {
  min = compGuess;
  count++;
  guessHigher(min, max);
}

function lowerClick() {
  max = compGuess;
  count++;
  guessLower(min, max);
}

function startSpil() {
  const userGuess = parseInt($("#userinput").value);
  compGuessText.textContent = "Computer gætter " + compGuess;
  if (userGuess < 1 || userGuess > 100 || userGuess == NaN) {
    $("#userinput").classList.add("fail");
    compGuessText.textContent = "Tallet skal være mellem 1 og 100";
  } else if (compGuess < userGuess) {
    btnHigher.addEventListener("click", higherClick);
  } else if (compGuess > userGuess) {
    btnLower.addEventListener("click", lowerClick);
  } else {
    btnGuessed.addEventListener("click", () => {
      compGuessText.textContent = "I AM AWESOME JEG BRUGTE " + count + " GÆT";
    });
  }
}

btnStart.addEventListener("click", () => {
  compGuess = 50;
  count = 0;
  min = 0;
  max = 100;
  startSpil();
});
