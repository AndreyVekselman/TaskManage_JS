import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";

import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";
import { saveToLocalStorage } from "./saveToLocalStorage.mjs";

import { Student } from "../Student.mjs";

function showOnTaskSolution() {
  // if (loadFromLocalStorage()) {
  //   const localStudent = loadFromLocalStorage();
  let localStudent = new Student();
  localStudent.studentTasks = localStudent.loadFromLocalStorage();

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
    localStudent.studentTasks[marker].taskTextSolution = "";
    if (taskSolution.value.length > 5) {
      localStudent.studentTasks[marker].taskTextSolution = taskSolution.value;
      localStudent.studentTasks[marker].flagComplete = true;
      localStudent.replaceTask(localStudent.studentTasks[marker], marker);

      // localStudent.saveToLocalStorage(localStudent.studentTasks[marker]);
    } else {
      alert("enter solution text, at least 5 characters");
    }
    console.log(localStudent.studentTasks[marker].taskTextSolution);
    // saveToLocalStorage(localStudent);
  });
}
showOnTaskSolution();
