import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";

import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";
import { saveToLocalStorage } from "./saveToLocalStorage.mjs";

function showOnTaskSolution() {
  const localSudent = loadFromLocalStorage();
  console.log(localSudent.studentTasks);
  localSudent.studentTasks.forEach((task) => {
    if (task.flagSolution) {
      const txtDiv = document.getElementById("text");
      const txtNode = document.createTextNode(task.taskText);
      txtDiv.appendChild(txtNode);
      const marker = task.taskId;
    }
  });
  // const btn=document.getElementById('btn');
  // const submitSolutionBtn = document.getElementById("submitSolution");
  // const link = document.createElement("a");
  // link.setAttribute("href", "/index.html");
}
showOnTaskSolution();
