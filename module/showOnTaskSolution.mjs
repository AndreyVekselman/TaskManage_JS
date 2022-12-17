import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";

import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";
import { saveToLocalStorage } from "./saveToLocalStorage.mjs";

import { showTaskDetails } from "./showTaskDetails.mjs";
import { Student } from "../Student.mjs";
import { checkDate } from "./checkDate.mjs";

function showOnTaskSolution() {
  let localStudent = new Student();
  localStudent.studentTasks = localStudent.loadFromLocalStorage();
  let marker = -1;

  localStudent.studentTasks.forEach((task) => {
    if (task.flagSolution) {
      marker = showTaskDetails(task);
      if (
        localStudent.studentTasks[marker].flagCheckComplete ||
        !checkDate(localStudent.studentTasks[marker].taskDeadlineTime)
      ) {
        taskSolution.disabled = true;
      }

      task.flagSolution = false;
    }
    localStudent.replaceTask(task, task.taskId);
  });
  const linkToIndex = document.getElementById("linkToIndex");
  const submitSolutionBtn = document.getElementById("submitSolution");

  if (taskSolution.disabled || marker == -1) {
    submitSolutionBtn.innerText = "Back to tasks";
    submitSolutionBtn.addEventListener("click", () => {
      linkToIndex.setAttribute("href", "/index.html");
      //
      linkToIndex.setAttribute("target", "_blank");
    });
  } else {
    submitSolutionBtn.addEventListener("click", () => {
      const taskSolution = document.getElementById("taskSolution");
      localStudent.studentTasks[marker].taskTextSolution = "";
      if (taskSolution.value.length >= 5) {
        localStudent.studentTasks[marker].taskTextSolution = taskSolution.value;
        localStudent.studentTasks[marker].flagComplete = true;
        localStudent.replaceTask(localStudent.studentTasks[marker], marker);
        linkToIndex.setAttribute("href", "/index.html");
        //
        linkToIndex.setAttribute("target", "_blank");
      } else {
        alert("enter solution text, at least 5 characters");
      }
    });
  }
}
showOnTaskSolution();
