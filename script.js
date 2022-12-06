// import classes and functions
import { Task } from "./Task.mjs";

let Task1 = new Task("create a class", "create 1-st class and use module");
Task1.showTask();
const Task2 = new Task("create function showOnHTML", "show it on HTML");
////
showOnHTML(Task1);
showOnHTML(Task2);

//outputting tasks to an HTML page
function showOnHTML(task) {
  let mainDiv = document.createElement("div");
  let taskName = document.createElement("div");
  let taskText = document.createElement("div");
  taskName.innerHTML = task.taskName;
  taskText.innerHTML = task.taskText;
  mainDiv.appendChild(taskName);
  mainDiv.appendChild(taskText);
  document.body.appendChild(mainDiv);
}
