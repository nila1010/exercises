"use strict";

window.addEventListener("DOMContentLoaded", start);

let animals;
let newAnimalArr = [];
let sorted = false;

function start() {
  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      animals = jsonData;

      // when loaded, display the list
      makeNewArray();
      displayList(newAnimalArr);
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

function makeNewArray() {
  animals.forEach((animal) => {
    const animalSplit = animal.fullname.split(" ");

    let newAnimal = {};
    newAnimal.name = animalSplit[0];
    newAnimal.desc = animalSplit[animalSplit.length - 2];
    newAnimal.type = animalSplit[animalSplit.length - 1];
    newAnimal.age = animal.age;
    newAnimalArr.push(newAnimal);
  });
}

function filter(evt) {
  if (evt.target.dataset.filter === "dogs") {
    sorted = newAnimalArr.filter((animal) => animal.type === "dog");
    displayList(sorted);
  } else if (evt.target.dataset.filter === "cats") {
    sorted = newAnimalArr.filter((animal) => animal.type === "cat");
    displayList(sorted);
  } else {
    sorted = false;
    displayList(newAnimalArr);
  }
}

function sort(evt) {
  if (evt.currentTarget.dataset.sort === "sortname") {
    if (sorted) {
      const sortedArray = sorted.sort((a, b) => (a.name < b.name ? -1 : 1));
      displayList(sortedArray);
    } else {
      const sortedArrayAll = newAnimalArr.sort((a, b) => (a.name < b.name ? -1 : 1));
      displayList(sortedArrayAll);
    }
  } else if (evt.currentTarget.dataset.sort === "sortage") {
    if (sorted) {
      const sortedArray = sorted.sort((a, b) => a.age - b.age);
      displayList(sortedArray);
    } else {
      const sortedArrayAll = newAnimalArr.sort((a, b) => a.age - b.age);
      displayList(sortedArrayAll);
    }
  } else if (evt.currentTarget.dataset.sort === "sortdesc") {
    if (sorted) {
      const sortedArray = sorted.sort((a, b) => (a.desc < b.desc ? -1 : 1));
      displayList(sortedArray);
    } else {
      const sortedArrayAll = newAnimalArr.sort((a, b) => (a.desc < b.desc ? -1 : 1));
      displayList(sortedArrayAll);
    }
  } else if (evt.currentTarget.dataset.sort === "sorttype") {
    if (sorted) {
      const sortedArray = sorted.sort((a, b) => (a.type < b.type ? -1 : 1));
      displayList(sortedArray);
    } else {
      const sortedArrayAll = newAnimalArr.sort((a, b) => (a.type < b.type ? -1 : 1));
      displayList(sortedArrayAll);
    }
  }
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", filter);
});

document.querySelectorAll(".sort").forEach((li) => {
  li.addEventListener("click", sort);
});
