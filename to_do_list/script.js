import { $, $$ } from "../utils/dom.js";

let myTasks = [];
let countDone = 0;
let countTodo = 0;

//--------------LocalStore Load--------------------//

addEventListener("load", () => {
  //Her henter jeg mit array fra localstorage
  myTasks = JSON.parse(localStorage.getItem("todolist"));
  changeCount();
  //For at sikre at den kun sætter indhold ind hvis der er noget har jeg brugt en if
  //sætning som bliver kørt hvis der er noget i arrayet den henter
  if (myTasks) {
    myTasks.forEach((task) => {
      const clone = $("template").content.cloneNode(true);
      clone.querySelector("div").id = `task${task.id}`;
      clone.querySelector("p").textContent = task.task;
      clone.querySelector("input").id = `check${task.id}`;

      //addEventListener to removebtn
      clone.querySelector("button").addEventListener("click", () => {
        removeTask(task.id);
      });

      //addEventListener to changebtn
      clone.querySelector("input").addEventListener("change", () => {
        changeList(task);
      });
      if (task.checked) {
        clone.querySelector("div").classList = "doneopgaver";
        clone.querySelector("input").checked = "checked";
        $("[data-view=done]").append(clone);
      } else {
        $("[data-view=todo]").append(clone);
      }
    });
  }
});

//--------------LocalStore SetItems--------------------//

function setLocalstorageItem() {
  localStorage.setItem("todolist", JSON.stringify(myTasks));
}

//--------------Change View--------------------//

function changeView(evt) {
  if (evt.currentTarget.dataset.view === "done") {
    $("section").style.setProperty("--view", "100px 650px");
    $("section article:last-child h2").id = "active";
    $("section article:first-child h2").id = "";
    $$(".todoopgaver").forEach((todo) => {
      todo.style.setProperty("--show", "none");
    });
    $$(".doneopgaver").forEach((done) => {
      done.style.setProperty("--show", "flex");
    });
    $("#donecount").style.display = "none";
    $("#todocount").style.display = "block";
  } else {
    $("section").style.setProperty("--view", "650px 100px");
    $("section article:last-child h2").id = "";
    $("section article:first-child h2").id = "active";
    $$(".todoopgaver").forEach((todo) => {
      todo.style.setProperty("--show", "flex");
    });
    $$(".doneopgaver").forEach((done) => {
      done.style.setProperty("--show", "none");
    });
    $("#donecount").style.display = "block";
    $("#todocount").style.display = "none";
  }
}

$$("article").forEach((art) => {
  art.addEventListener("click", changeView);
});

//--------------Add Tasks-------------------//

function addToArray() {
  let userInput = $("#input").value;
  const task = {};

  //--------------Feedback-------------------//
  if (userInput === "") {
    $(".inputfield").classList.add("error");
    $("#input").placeholder = "Du mangler at indtase en opgave";
  } else {
    $(".inputfield").classList.remove("error");
    $("#input").placeholder = "Skriv din opgave her";

    //--------------Resten af koden til at pushe indhold til mit array-------------------//

    task.task = userInput;
    task.task = task.task[0].toUpperCase() + task.task.slice(1).toLowerCase();
    task.checked = false;
    if (myTasks === null) {
      myTasks = [];
      task.id = 1;
    } else {
      task.id = myTasks.reduce((maxId, job) => {
        return Math.max(maxId, job.id) + 1;
      }, 1);
    }
    myTasks.push(task);
    setLocalstorageItem();
    addTask(task);
    $("#input").value = "";
  }
}

function addTask(task) {
  const clone = $("template").content.cloneNode(true);
  clone.querySelector("div").id = `task${task.id}`;
  clone.querySelector("p").textContent = task.task;
  clone.querySelector("input").id = `check${task.id}`;

  //addEventListener to removebtn
  //Jeg sender et id med som matcher index i array så knapper ved
  //hvilket element de skal "snakke" med
  clone.querySelector("button").addEventListener("click", () => {
    removeTask(task.id);
  });

  //addEventListener to changebtn
  clone.querySelector("input").addEventListener("change", () => {
    changeList(task);
  });
  $("[data-view=todo]").append(clone);
  changeCount();
}

$("#addbtn").addEventListener("click", addToArray);

//--------------Remove Tasks-------------------//

function removeTask(id) {
  if ($(`#check${id}`).checked) {
    $("[data-view=done]").removeChild($(`#task${id}`));
    myTasks = myTasks.filter((task) => task.id !== id);
    setLocalstorageItem();
  } else {
    $("[data-view=todo]").removeChild($(`#task${id}`));
    myTasks = myTasks.filter((task) => task.id !== id);
    setLocalstorageItem();
    changeCount();
  }
}

//--------------Task Checked-------------------//

function changeList(task) {
  if ($(`#check${task.id}`).checked) {
    task.checked = true;
    $(`#task${task.id}`).classList = "doneopgaver";
    $(`#task${task.id}`).style.setProperty("--show", "none");
    $("[data-view=done]").append($(`#task${task.id}`));
    setLocalstorageItem();
  } else {
    task.checked = false;
    $(`#task${task.id}`).classList = "todoopgaver";
    $(`#task${task.id}`).style.setProperty("--show", "none");
    $("[data-view=todo]").append($(`#task${task.id}`));
    setLocalstorageItem();
  }
  changeCount();
}

//--------------Count-------------------//

function changeCount() {
  const countDoneFilter = myTasks.filter((task) => task.checked === true);
  countDone = countDoneFilter.length;
  $("#donecount").textContent = countDone;
  const countTodoFilter = myTasks.filter((task) => task.checked === false);
  countTodo = countTodoFilter.length;
  $("#todocount").textContent = countTodo;
}