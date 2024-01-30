"use strict";

const btn = document.querySelector("#btn");
const nytTal = document.querySelector("#tal");

// Funktion til random tal

function generateRandomNum(maxValue, placement) {
  let randNum = Math.floor(Math.random() * maxValue);
  placement.innerHTML = randNum;
}

btn.addEventListener("click", () => {
  generateRandomNum(100, nytTal);
});
