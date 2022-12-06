// import classes and functions
import { Task } from "./Task.mjs";
import { showOnHTML } from "./module/showOnHTML.mjs";

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
showOnHTML(Task1);
showOnHTML(Task1);
