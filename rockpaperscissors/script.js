"use strict";

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const btn = document.querySelector("#buttons");
const vind = document.querySelector("#win");
const tabt = document.querySelector("#lose");
const uafgjort = document.querySelector("#draw");

let randNum;
// lav random num mellem 1 og 3

function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

// Shake funktion

function startShake() {
  player1.classList.add("shake");
  player2.classList.add("shake");
}

//Computer output

function computerOutput(input) {
  if (input === 1) {
    player2.classList.add("paper");
  } else if (input === 2) {
    player2.classList.add("rock");
  } else player2.classList.add("scissors");
}

// function til at sammenlign outcom

function sammenlignOutcom(feedback) {
  vind.classList = "hidden";
  tabt.classList = "hidden";
  uafgjort.classList = "hidden";
  if ((randNum === 1 && feedback === "rock") || (randNum === 2 && feedback === "scissors") || (randNum === 3 && feedback === "paper")) {
    tabt.classList.remove("hidden");
  } else if ((randNum === 1 && feedback === "paper") || (randNum === 2 && feedback === "rock") || (randNum === 3 && feedback === "scissors")) {
    uafgjort.classList.remove("hidden");
  } else vind.classList.remove("hidden");
}

// funktion til start spil

function startSpil(feedback) {
  startShake();
  randNum = randomNumber(3);
  player1.addEventListener("animationend", () => {
    player1.classList = "player";
    player1.classList.add(feedback);
  });
  player2.addEventListener("animationend", () => {
    player2.classList = "player";
    computerOutput(randNum);
    sammenlignOutcom(feedback);
  });
}

// eventlistner til start spil

btn.addEventListener("click", (btn) => {
  vind.classList = "hidden";
  tabt.classList = "hidden";
  uafgjort.classList = "hidden";
  if (btn.target.className === "rock") {
    startSpil("rock");
  } else if (btn.target.className === "paper") {
    startSpil("paper");
  } else startSpil("scissors");
});
