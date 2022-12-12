import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";

import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";
import { saveToLocalStorage } from "./saveToLocalStorage.mjs";

function showOnTaskSolution() {
  const Newtask = loadFromLocalStorage();
  console.log(Newtask.studentTasks);

  //   if (Newtask.studentTask.taskSolution) {
  //     const txtDiv = document.getElementById("text");
  //     const txtNode = document.createTextNode(Newtask.taskText);
  //     txtDiv.appendChild(txtNode);
  //   }
}
showOnTaskSolution();
