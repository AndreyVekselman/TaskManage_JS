// import classes and functions
import { Task } from "./Task.mjs";
import { showOnHTML } from "./module/showOnHTML.mjs";
import { Student } from "./Student.mjs";
import { removeItems } from "./module/removeItems.mjs";
let LS = localStorage;

//add task on screen when it was added
window.addEventListener("storage", function (e) {
  removeItems();
  let Big = JSON.parse(LS.getItem("student"));
  Big.studentTasks.forEach((element) => {
    console.log(Big);
    showOnHTML(element);
  });
});

let Task1 = new Task("create a class", "create a 1-st class and use module");
const Alim = new Student();
const Task2 = new Task("create a function showOnHTML", "show tasks it on HTML");
const Task3 = new Task(
  "Create a CSS file",
  "Create a CSS file and stylish tasks on HTML page"
);
Alim.addTask(Task1);
Alim.addTask(Task2);
Alim.addTask(Task3);
////
LS.setItem("student", JSON.stringify(Alim));
///
let Big = new Student();
Big = JSON.parse(LS.getItem("student"));
Big.studentTasks.forEach((element) => {
  showOnHTML(element);
});

//refresh tasks pages
const refresh = document.getElementById("refresh");
refresh.addEventListener("click", () => {
  let Big = JSON.parse(LS.getItem("student"));
  removeItems();
  Big.studentTasks.forEach((element) => {
    showOnHTML(element);
  });
  console.log(Big.studentTasks);
});
