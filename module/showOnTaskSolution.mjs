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
    }

    console.log(task.flagSolution);
  });

  //   if (Newtask.studentTask.taskSolution) {
  //     const txtDiv = document.getElementById("text");
  //     const txtNode = document.createTextNode(Newtask.taskText);
  //     txtDiv.appendChild(txtNode);
  //   }
}
showOnTaskSolution();
