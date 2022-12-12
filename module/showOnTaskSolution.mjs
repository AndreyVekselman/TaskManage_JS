import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";

import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";
import { saveToLocalStorage } from "./saveToLocalStorage.mjs";

function showOnTaskSolution() {
  if (loadFromLocalStorage()) {
    const localStudent = loadFromLocalStorage();

    let marker;
    console.log(localStudent.studentTasks);
    localStudent.studentTasks.forEach((task) => {
      if (task.flagSolution) {
        const txtDiv = document.getElementById("text");
        const txtNode = document.createTextNode(task.taskText);
        txtDiv.appendChild(txtNode);
        marker = task.taskId;
        task.flagSolution = false;
      }
    });
    const submitSolutionBtn = document.getElementById("submitSolution");
    submitSolutionBtn.addEventListener("click", () => {
      const taskSolution = document.getElementById("taskSolution");
      console.log(taskSolution.value);
      console.log(taskSolution.value.length);
      if (taskSolution.value.length > 5) {
        localStudent.studentTasks[marker].taskTextSolution = taskSolution.value;
        localStudent.studentTasks[marker].flagComplete = true;
      } else {
        alert("enter solution text, at least 5 characters");
      }
      console.log(localStudent.studentTasks[marker].taskSolution);
      saveToLocalStorage(localStudent);
    });
  }
}
showOnTaskSolution();
