"use strict";

window.addEventListener("DOMContentLoaded", start);

let animals = [];
let sorted = false;

function start() {
  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // vi tager dataen fra json og laver et nyt array som vi ønsker

      jsonData.forEach((animal) => {
        const animalSplit = animal.fullname.split(" ");

        let newAnimal = {};
        newAnimal.name = animalSplit[0];
        newAnimal.desc = animalSplit[animalSplit.length - 2];
        newAnimal.type = animalSplit[animalSplit.length - 1];
        newAnimal.age = animal.age;
        animals.push(newAnimal);
      });

      // when loaded, display the list

      displayList(animals);
    });
}

function displayList(parm) {
  // clear the list
  document.querySelector("#list").innerHTML = "";

  // build a new list
  parm.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=age]").textContent = animal.age;
  clone.querySelector("[data-field=decs]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;

  // append clone to list
  document.querySelector("#list").appendChild(clone);
}

function filter(evt) {
  const target = evt.target.dataset.filter;
  if (target === "dog" || target === "cat") {
    sorted = animals.filter((animal) => animal.type === target);
    displayList(sorted);
  } else {
    sorted = false;
    displayList(animals);
  }
  console.log(target);
}

function sort(evt) {
  let direction = 1;
  const target = evt.currentTarget.dataset.sort;

  if (evt.currentTarget.dataset.order === "asc") {
    evt.currentTarget.dataset.order = "dec";
    direction = 1;
  } else {
    evt.currentTarget.dataset.order = "asc";
    direction = -1;
  }
  console.log(direction);
  if (sorted) {
    const sortedArray = sorted.sort((a, b) => (a[target] < b[target] ? -1 * [direction] : 1 * [direction]));
    displayList(sortedArray);
  } else {
    const sortedArray = animals.sort((a, b) => (a[target] < b[target] ? -1 * [direction] : 1 * [direction]));
    displayList(sortedArray);
  }
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", filter);
});

document.querySelectorAll(".sort").forEach((li) => {
  li.addEventListener("click", sort);
});
