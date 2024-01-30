"use strict";

const btn = document.querySelector("#btn");
const feedbackFeeld = document.querySelector("#feedback");
const userInput = document.querySelector("#input");

// Funktion til random tal

function generateRandomNum(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

let randNum = generateRandomNum(100);

// Sammenlign gæt og tal og kom med feedback

function feedback(value, input) {
  if (value === input) {
    feedbackFeeld.innerHTML = "Godt gættet!!";
  }
  if (value > input) {
    feedbackFeeld.innerHTML = "Du gættede for lavt";
  }
  if (value < input) {
    feedbackFeeld.innerHTML = "Du gættede for højt";
  }
  if (input > 100) {
    feedbackFeeld.innerHTML = "Du kan kun gætte på tal mellem 0 og 100";
    userInput.classList.add("wrong");
  }
}
btn.addEventListener("click", () => {
  userInput.classList = "";
  const input = parseInt(userInput.value);
  feedback(randNum, input);
});
