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
        newAnimal.startoggle = false;
        newAnimal.star = "&star;";
        newAnimal.name = animalSplit[0];
        newAnimal.desc = animalSplit[animalSplit.length - 2];
        newAnimal.desc = newAnimal.desc.charAt(0).toUpperCase() + newAnimal.desc.slice(1);
        newAnimal.type = animalSplit[animalSplit.length - 1];
        newAnimal.type = newAnimal.type.charAt(0).toUpperCase() + newAnimal.type.slice(1);
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

function displayAnimal(animal, index) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=star]").innerHTML = animal.star;
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=age]").textContent = animal.age;
  clone.querySelector("[data-field=decs]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=star]").setAttribute("data-index", index);
  if (animal.startoggle) {
    clone.querySelector("[data-field=star]").classList.add("checked");
  }
  // append clone to list
  document.querySelector("#list").appendChild(clone);

  document.querySelectorAll(".star").forEach((star) => {
    star.addEventListener("click", toggleStar);
  });
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
  let direction;
  const target = evt.currentTarget.dataset.sort;

  if (evt.currentTarget.dataset.order === "asc") {
    evt.currentTarget.dataset.order = "dec";
    direction = -1;
  } else {
    evt.currentTarget.dataset.order = "asc";
    direction = 1;
  }
  if (sorted) {
    const sortedArray = sorted.sort((a, b) => (a[target] < b[target] ? -1 * [direction] : 1 * [direction]));
    displayList(sortedArray);
  } else {
    const sortedArray = animals.sort((a, b) => (a[target] < b[target] ? -1 * [direction] : 1 * [direction]));
    displayList(sortedArray);
    console.log(sortedArray);
  }
}

function toggleStar(evt) {
  evt.target.classList.toggle("checked");
  const fill = "&starf;";
  const outline = "&star;";
  const targetIndex = evt.target.getAttribute("data-index");
  if (evt.target.classList.contains("checked")) {
    evt.target.innerHTML = fill;
    animals[targetIndex].star = fill;
    animals[targetIndex].startoggle = true;
    console.log(animals);
  } else {
    evt.target.innerHTML = outline;
    animals[targetIndex].startoggle = false;
  }
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", filter);
});

document.querySelectorAll(".sort").forEach((li) => {
  li.addEventListener("click", sort);
});
