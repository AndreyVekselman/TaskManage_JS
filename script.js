// import classes and functions
import { Task } from "./Task.mjs";
import { showOnHTML } from "./module/showOnHTML.mjs";
import { Student } from "./Student.mjs";
import { removeItems } from "./module/removeItems.mjs";
import { freshMainScreen } from "./module/freshMainScreen.mjs";

//add or remove tasks on screen when it was added
window.addEventListener("storage", function (e) {
  freshMainScreen();
});

freshMainScreen();
