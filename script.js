// import classes and functions
import { Task } from "./Task.mjs";
import { showOnHTML } from "./module/showOnHTML.mjs";
import { Student } from "./Student.mjs";
import { removeItems } from "./module/removeItems.mjs";
let LS = localStorage;

const refresh = document.getElementById("refresh");

let Task1 = new Task("create a class", "create a 1-st class and use module");
const Alim = new Student();

Task1.showTask();

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
let Big = LS.getItem("student");

// Big = LS.getItem("student");
Big = JSON.parse(Big);
// console.log(Big.studentTasks);
console.log(Big);
console.log(Alim);

showOnHTML(Alim.studentTasks[0]);
showOnHTML(Task2);
showOnHTML(Task3);
showOnHTML(Task1);
showOnHTML(Big.studentTasks[1]);
refresh.addEventListener("click", () => {
  Big = LS.getItem("student");
  Big = JSON.parse(Big);
  removeItems();
  Big.studentTasks.forEach((element) => {
    showOnHTML(element);
  });
  console.log(Big.studentTasks);
});
