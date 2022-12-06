// import classes and functions
import { Task } from "./Task.mjs";

let Task1 = new Task("create a class", "create a 1-st class and use module");
Task1.showTask();
const Task2 = new Task("create a function showOnHTML", "show tasks it on HTML");

const Task3 = new Task(
  "Create a CSS file",
  "Create a CSS file and stylish tasks on HTML page"
);
////
showOnHTML(Task1);
showOnHTML(Task2);
showOnHTML(Task3);
// showOnHTML(Task1);
// showOnHTML(Task1);

//outputting tasks to an HTML page
function showOnHTML(task) {
  const main = document.querySelector("main");
  const mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";
  const taskName = document.createElement("div");
  taskName.innerHTML = task.taskName;
  taskName.className = "Name";
  const taskText = document.createElement("div");
  taskText.className = "Text";
  taskText.innerHTML = task.taskText;
  const status = document.createElement("div");
  status.setAttribute("class", "status");
  status.className = "status";
  if (task.flagComplete) {
    status.innerHTML = "Done";
    status.setAttribute("id", "green");
  } else {
    status.setAttribute("id", "red");
    status.innerHTML = "Need perform";
  }
  console.log(status);
  mainDiv.appendChild(taskName);
  mainDiv.appendChild(taskText);
  mainDiv.appendChild(status);
  main.appendChild(mainDiv);
}
