import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";

import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";
import { saveToLocalStorage } from "./saveToLocalStorage.mjs";

import { showTaskDetails } from "./showTaskDetails.mjs";
import { Student } from "../Student.mjs";

function showOnTaskSolution() {
  let localStudent = new Student();
  localStudent.studentTasks = localStudent.loadFromLocalStorage();
  let marker;

  localStudent.studentTasks.forEach((task) => {
    if (task.flagSolution) {
      marker = showTaskDetails(task);
      task.flagSolution = false;
    }
    localStudent.replaceTask(task, task.taskId);
  });
  const linkToIndex = document.getElementById("linkToIndex");
  const submitSolutionBtn = document.getElementById("submitSolution");
  submitSolutionBtn.addEventListener("click", () => {
    const taskSolution = document.getElementById("taskSolution");
    localStudent.studentTasks[marker].taskTextSolution = "";
    if (taskSolution.value.length > 4) {
      localStudent.studentTasks[marker].taskTextSolution = taskSolution.value;
      localStudent.studentTasks[marker].flagComplete = true;
      localStudent.replaceTask(localStudent.studentTasks[marker], marker);
      linkToIndex.setAttribute("href", "/index.html");
    } else {
      alert("enter solution text, at least 5 characters");
    }
  });
}
showOnTaskSolution();
