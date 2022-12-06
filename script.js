// import classes and functions
import { Task } from "./Task.mjs";

let Task1 = new Task("create a class", "create 1-st class and use module");
Task1.showTask();
////
showOnHTML(Task1);

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
